import test from 'node:test';
import assert from 'node:assert/strict';
import { ERROR_CODES, checkPermission } from '../src/core/contracts.ts';
import { validateIpcRequest, IPC_CHANNELS } from '../src/electron/ipc/contracts.ts';
import { translations, getLocaleDirection } from '../src/core/i18n.ts';

test('Contracts: Error Codes catalog contains standard codes', () => {
  assert.equal(ERROR_CODES.AUTH_INVALID_CREDENTIALS, 'AUTH_INVALID_CREDENTIALS');
  assert.equal(ERROR_CODES.FILE_PATH_PROTECTED, 'FILE_PATH_PROTECTED');
  assert.equal(ERROR_CODES.DB_CONNECTION_FAILED, 'DB_CONNECTION_FAILED');
  assert.equal(ERROR_CODES.VALIDATION_FAILED, 'VALIDATION_FAILED');
});

test('Contracts: checkPermission validates wildcard and exact permissions', () => {
  assert.equal(checkPermission(['*'], 'filesystem.user.read'), true);
  assert.equal(checkPermission(['filesystem.user.*'], 'filesystem.user.read'), true);
  assert.equal(checkPermission(['filesystem.user.*'], 'filesystem.user.write'), true);
  assert.equal(checkPermission(['filesystem.user.*'], 'terminal.execute'), false);
  assert.equal(checkPermission(['terminal.execute'], 'terminal.execute'), true);
  assert.equal(checkPermission(['system.info.read'], 'system.process.control'), false);
});

test('IPC: validateIpcRequest enforces schema and channel allowlist', () => {
  // Valid request
  const valid = validateIpcRequest({
    requestId: 'req-123',
    channel: IPC_CHANNELS.SYSTEM_GET_INFO,
    version: 1,
    payload: { test: true },
  });
  assert.equal(valid.isValid, true);
  assert.equal(valid.request?.channel, 'system:getInfo');

  // Invalid channel
  const invalidChannel = validateIpcRequest({
    requestId: 'req-456',
    channel: 'arbitrary:unsafeChannel',
    version: 1,
    payload: {},
  });
  assert.equal(invalidChannel.isValid, false);
  assert.match(invalidChannel.error || '', /disallowed IPC channel/);

  // Missing requestId
  const missingId = validateIpcRequest({
    channel: IPC_CHANNELS.WINDOW_MINIMIZE,
    version: 1,
    payload: {},
  });
  assert.equal(missingId.isValid, false);
});

test('i18n: translations provide complete en-US and ur-PK dictionaries and directions', () => {
  assert.equal(getLocaleDirection('en-US'), 'ltr');
  assert.equal(getLocaleDirection('ur-PK'), 'rtl');

  const enKeys = Object.keys(translations['en-US']);
  const urKeys = Object.keys(translations['ur-PK']);

  assert.equal(enKeys.length > 20, true);
  assert.deepEqual(enKeys.sort(), urKeys.sort());
  assert.equal(translations['en-US'].start, 'Start');
  assert.equal(translations['ur-PK'].start, 'شروع');
  assert.equal(translations['en-US'].devWorkspace, 'Dev Workspace');
  assert.equal(translations['ur-PK'].devWorkspace, 'ڈویلپر ورک اسپیس');
  assert.equal(translations['en-US'].textEditor, 'Text Editor');
  assert.equal(translations['ur-PK'].textEditor, 'ٹیکسٹ ایڈیٹر');
  assert.equal(translations['en-US'].appCatalog, 'App Catalog');
  assert.equal(translations['ur-PK'].appCatalog, 'ایپ کیٹلاگ');
  assert.equal(translations['en-US'].eventViewer, 'Event Viewer');
  assert.equal(translations['ur-PK'].eventViewer, 'ایونٹ ویور');
  assert.equal(translations['en-US'].mediaPlayer, 'Media Player');
  assert.equal(translations['ur-PK'].mediaPlayer, 'میڈیا پلیئر');
  assert.equal(translations['en-US'].gallery, 'Photo Studio');
  assert.equal(translations['ur-PK'].gallery, 'فوٹو اسٹوڈیو');
});
