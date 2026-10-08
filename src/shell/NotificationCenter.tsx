import React from 'react';
import { Bell, X, Trash2, CheckCircle2, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { useDesktop } from '../core/desktopStore';
import { soundEngine } from '../design-system/soundEngine';

export const NotificationCenter: React.FC = () => {
  const {
    isNotificationCenterOpen,
    notifications,
    dismissNotification,
    clearAllNotifications,
  } = useDesktop();

  if (!isNotificationCenterOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-amber-400" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Info className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-16 right-4 w-88 rounded-2xl bg-[var(--surface-menu)] border border-[var(--border-strong)] shadow-2xl backdrop-blur-3xl z-[var(--z-notification-center)] flex flex-col max-h-[500px] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-150 select-none"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-[var(--border-subtle)] bg-[var(--surface-acrylic)]">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-[var(--accent-primary)]" />
          <span className="text-xs font-bold text-[var(--text-primary)]">Notifications</span>
          {notifications.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-[var(--accent-primary)] text-white text-[10px] font-bold">
              {notifications.length}
            </span>
          )}
        </div>

        {notifications.length > 0 && (
          <button
            onClick={clearAllNotifications}
            className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] hover:text-white transition-colors"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-[var(--text-muted)] gap-2">
            <Bell className="w-8 h-8 opacity-30 stroke-[1.2]" />
            <p className="text-xs">No notifications right now</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className="p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--border-medium)] transition-all space-y-1 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getTypeIcon(notif.type)}
                  <span className="text-xs font-semibold text-[var(--text-primary)]">{notif.title}</span>
                </div>
                <button
                  onClick={() => {
                    soundEngine.play('click');
                    dismissNotification(notif.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-[var(--text-muted)] hover:text-white transition-all rounded"
                  title="Dismiss"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">{notif.message}</p>

              <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pt-1">
                <span>{notif.source}</span>
                <span>{notif.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
