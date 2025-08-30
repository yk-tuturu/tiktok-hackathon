import { useState } from 'react';

interface TestResult {
  input: string;
  output: string;
  timestamp: string;
}

export default function SimpleTest() {
  const testInputs = [
    "Call me at (555) 123-4567 tomorrow at 3 PM",
    "Send an email to john.doe@example.com about the meeting",
    "Visit our website at https://www.example.com for more info",
    "Meet me at 123 Main Street, New York, NY 10001",
    "The event is scheduled for December 25, 2024 at 2:30 PM"
  ];

  const [results, setResults] = useState<TestResult[]>([]);
  const [isModelAvailable, setIsModelAvailable] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkModelAvailability = () => {
    NativeModules.EntityRecognitionModule.isModelAvailable((isAvailable: boolean) => {
      setIsModelAvailable(isAvailable);
      if (!isAvailable) {
        addResult("Model Check", "Entity recognition model is not available. Please download it first.", new Date().toLocaleTimeString());
      } else {
        addResult("Model Check", "Entity recognition model is available and ready to use.", new Date().toLocaleTimeString());
      }
    });
  };

  const downloadModel = () => {
    setIsLoading(true);
    addResult("Model Download", "Starting model download...", new Date().toLocaleTimeString());

    NativeModules.EntityRecognitionModule.downloadModel((success: boolean, error?: string) => {
      setIsLoading(false);
      if (success) {
        addResult("Model Download", "Model downloaded successfully!", new Date().toLocaleTimeString());
        setIsModelAvailable(true);
      } else {
        addResult("Model Download", `Download failed: ${error || 'Unknown error'}`, new Date().toLocaleTimeString());
      }
    });
  };

  const runSingleTest = (text: string) => {
    setIsLoading(true);
    addResult(text, "Processing...", new Date().toLocaleTimeString());

    NativeModules.EntityRecognitionModule.extractEntities(text, (result: EntityExtractionResult) => {
      setIsLoading(false);

      if (result.entities) {
        const entitySummary = result.entities.map(entity =>
          `[${entity.type}] "${entity.text}" (${entity.startOffset}-${entity.endOffset})`
        ).join('\n');

        const output = `Found ${result.entities.length} entities:\n${entitySummary}`;
        updateLastResult(text, output);
      } else {
        updateLastResult(text, `Error: ${result.error || 'Unknown error'}`);
      }
    });
  };

  const runAllTests = () => {
    if (!isModelAvailable) {
      addResult("Test Suite", "Cannot run tests: Model not available", new Date().toLocaleTimeString());
      return;
    }

    testInputs.forEach((input, index) => {
      setTimeout(() => runSingleTest(input), index * 1000); // Stagger tests by 1 second
    });
  };

  const addResult = (input: string, output: string, timestamp: string) => {
    setResults(prev => [...prev, { input, output, timestamp }]);
  };

  const updateLastResult = (input: string, output: string) => {
    setResults(prev => {
      const newResults = [...prev];
      for (let i = newResults.length - 1; i >= 0; i--) {
        if (newResults[i].input === input) {
          newResults[i] = { ...newResults[i], output };
          break;
        }
      }
      return newResults;
    });
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <view style={{ flex: 1, padding: '20px', height: '100vh', overflow: 'auto' }}>
      <text style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Entity Recognition Module Test
      </text>

      <view style={{ marginBottom: '20px' }}>
        <text style={{ fontSize: '16px', marginBottom: '10px' }}>
          Model Status: {isModelAvailable === null ? 'Unknown' : isModelAvailable ? 'Available' : 'Not Available'}
        </text>

        <view style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <view className="submitButton" bindtap={checkModelAvailability}>
            <text>Check Model</text>
          </view>
          <view className="submitButton" bindtap={downloadModel}>
            <text>Download Model</text>
          </view>
        </view>

        <view style={{ display: 'flex', gap: '10px' }}>
          <view className="submitButton" bindtap={runAllTests}>
            <text>Run All Tests</text>
          </view>
          <view className="submitButton" bindtap={clearResults}>
            <text>Clear Results</text>
          </view>
        </view>
      </view>

      <view style={{ maxHeight: '400px', border: '1px solid #ccc', padding: '10px', overflow: 'auto' }}>
        {results.map((result, index) => (
          <view key={index} style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f5f5f5' }}>
            <text style={{ fontWeight: 'bold', fontSize: '14px', margin: 0 }}>
              [{result.timestamp}] Input: {result.input}
            </text>
            <text style={{ marginTop: '5px', fontSize: '12px', fontFamily: 'monospace', whiteSpace: 'normal', margin: 0, display: 'block' }}>
              {result.output}
            </text>
          </view>
        ))}
      </view>
    </view>
  );
}
