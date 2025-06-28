import { SenderChainKey } from './sender-chain-key';
import { SenderMessageKey } from './sender-message-key';
interface SenderChainKeyStructure {
    iteration: number;
    seed: Uint8Array;
}
interface SenderSigningKeyStructure {
    public: Uint8Array;
    private?: Uint8Array;
}
interface SenderMessageKeyStructure {
    iteration: number;
    seed: Uint8Array;
}
interface SenderKeyStateStructure {
    senderKeyId: number;
    senderChainKey: SenderChainKeyStructure;
    senderSigningKey: SenderSigningKeyStructure;
    senderMessageKeys: SenderMessageKeyStructure[];
}
export declare class SenderKeyState {
    private readonly MAX_MESSAGE_KEYS;
    private readonly senderKeyStateStructure;
    constructor(id?: number | null, iteration?: number | null, chainKey?: Uint8Array | null, signatureKeyPair?: {
        public: Uint8Array;
        private: Uint8Array;
    } | null, signatureKeyPublic?: Uint8Array | null, signatureKeyPrivate?: Uint8Array | null, senderKeyStateStructure?: SenderKeyStateStructure | null);
    getKeyId(): number;
    getSenderChainKey(): SenderChainKey;
    setSenderChainKey(chainKey: SenderChainKey): void;
    getSigningKeyPublic(): Buffer;
    getSigningKeyPrivate(): Buffer | undefined;
    hasSenderMessageKey(iteration: number): boolean;
    addSenderMessageKey(senderMessageKey: SenderMessageKey): void;
    removeSenderMessageKey(iteration: number): SenderMessageKey | null;
    getStructure(): SenderKeyStateStructure;
}
export {};
