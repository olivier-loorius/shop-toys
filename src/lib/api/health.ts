export interface HealthResponse {
  ok: boolean;
  message: string;
  timestamp: string;
  version: string;
}

export function getHealth(): HealthResponse {
  return {
    ok: true,
    message: "API en ligne 🚀",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  };
}
