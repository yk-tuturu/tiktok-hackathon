declare let NativeModules: {
  EntityRecognitionModule: {
    /**
     * Extract entities from the given text
     * @param text The text to analyze for entities
     * @param callback Callback function that receives the extraction results
     */
    extractEntities(text: string, callback: (result: EntityExtractionResult) => void): void;

    /**
     * Download the entity extraction model
     * @param callback Callback function that receives the download result
     */
    downloadModel(callback: (success: boolean, error?: string) => void): void;

    /**
     * Check if the entity extraction model is available
     * @param callback Callback function that receives the availability status
     */
    isModelAvailable(callback: (isAvailable: boolean) => void): void;
  };
};

interface EntityExtractionResult {
  entities?: EntityInfo[];
  error?: string;
}

interface EntityInfo {
  text: string;
  startOffset: number;
  endOffset: number;
  type: string;
  // Optional fields based on entity type
  granularity?: number;
  timestamp?: number;
  url?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
}
