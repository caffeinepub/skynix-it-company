import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    companyName?: string;
    phoneNumber?: string;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getSubmission(id: bigint): Promise<ContactSubmission>;
    submitContact(name: string, email: string, phoneNumber: string | null, companyName: string | null, message: string): Promise<bigint>;
}
