export interface DatabaseInterface {
    open(): Promise<void>;
    createDemo(): Promise<void>;
    getAll(): Promise<void>;
}