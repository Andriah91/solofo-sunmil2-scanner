import type { PluginListenerHandle } from '@capacitor/core';
export declare type ScanChangeListener = (resultScan: any) => void;
export interface ScannerLaserPlugin {
    addListener(eventName: 'ScannerLaserListner', listenerFunc: ScanChangeListener): Promise<PluginListenerHandle> & PluginListenerHandle;
}