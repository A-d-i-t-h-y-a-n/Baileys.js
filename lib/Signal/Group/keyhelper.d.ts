import { generateKeyPair } from 'libsignal/src/curve';
type KeyPairType = ReturnType<typeof generateKeyPair>;
export declare function generateSenderKey(): Buffer;
export declare function generateSenderKeyId(): number;
export interface SigningKeyPair {
    public: Buffer;
    private: Buffer;
}
export declare function generateSenderSigningKey(key?: KeyPairType): SigningKeyPair;
export {};
