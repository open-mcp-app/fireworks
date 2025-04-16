export interface MCPRequest {
  method: string;
  params?: any;
}

export interface MCPResponse {
  result?: any;
  error?: {
    code: number;
    message: string;
  };
}

export interface MCPFileOperation {
  type: 'read' | 'write' | 'delete' | 'list';
  path: string;
  data?: any;
} 