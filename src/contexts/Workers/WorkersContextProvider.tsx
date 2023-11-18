import React, { ReactNode, createContext, useState } from 'react';
import { Worker } from '../../types/Worker';

interface WorkersContextValue {
  selectedWorker: Worker | undefined;
  setSelectedWorker: React.Dispatch<React.SetStateAction<Worker | undefined>>
}

export const WorkersContext = createContext<WorkersContextValue>(
  {} as WorkersContextValue,
);

type WorkersContextProviderProps = {
  children: ReactNode;
};

export default function WorkersContextProvider(props: WorkersContextProviderProps) {
  const { children } = props;
  const [selectedWorker, setSelectedWorker] = useState<Worker>()
    
  const value: WorkersContextValue = React.useMemo(() => ({
    selectedWorker,
    setSelectedWorker
  }), [selectedWorker]);

  return (
    <WorkersContext.Provider value={value}>
      {children}
    </WorkersContext.Provider>
  );
}
