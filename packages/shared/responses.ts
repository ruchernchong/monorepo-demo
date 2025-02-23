export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const createSuccessResponse = <T>(data: T): ApiResponse<T> => ({
  success: true,
  data,
});

export const createErrorResponse = (error: string): ApiResponse<null> => ({
  success: false,
  error,
});
