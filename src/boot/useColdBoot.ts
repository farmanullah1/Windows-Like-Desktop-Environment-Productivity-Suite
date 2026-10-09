/**
 * Process-Local Cold-Boot Detection Hook
 * Compliant with Master Specification Section 2 (Cold Start Only Directive)
 * 
 * Guarantees that the boot animation runs exactly once on genuine cold start
 * and NEVER replays on renderer refresh (F5/Ctrl+R), HMR, or navigation.
 */

import { useState, useEffect } from 'react';

// Module-level in-memory flag: per-renderer process lifetime
let clientConsumedSignal = false;

export function useColdBoot() {
  const [state, setState] = useState<'checking' | 'cold' | 'warm'>('checking');

  useEffect(() => {
    let cancelled = false;

    // If client module already consumed cold boot in this renderer session, it is warm
    if (clientConsumedSignal) {
      setState('warm');
      return;
    }

    clientConsumedSignal = true;

    // Electron contextBridge fallback or REST API single-use signal
    const checkSignal = async () => {
      try {
        if (typeof window !== 'undefined' && (window as any).boot?.consumeColdSignal) {
          const res = await (window as any).boot.consumeColdSignal();
          if (!cancelled) setState(res?.isColdBoot ? 'cold' : 'warm');
          return;
        }

        const res = await fetch('/api/v1/boot/consume-cold-signal', { method: 'POST' });
        if (res.ok) {
          const json = await res.json();
          if (!cancelled) {
            setState(json?.data?.isColdBoot ? 'cold' : 'warm');
          }
        } else {
          if (!cancelled) setState('warm');
        }
      } catch (_e) {
        if (!cancelled) setState('warm');
      }
    };

    checkSignal();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
