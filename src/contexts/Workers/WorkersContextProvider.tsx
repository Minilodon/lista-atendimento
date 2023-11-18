import React, { ReactNode, createContext, useCallback, useState } from 'react';
import { Worker } from '../../types/Worker';
import { faker } from '@faker-js/faker';

interface WorkersContextValue {
  selectedWorker: Worker | undefined;
  setSelectedWorker: React.Dispatch<React.SetStateAction<Worker | undefined>>
  workers: Worker[]
  setWorkers: React.Dispatch<React.SetStateAction<Worker[]>>
  addWorker: (name: string) => void
  putFirstToLastPosition: () => void
  deleteWorker: (workerId: string) => void
  cleanList: () => void
}

export const WorkersContext = createContext<WorkersContextValue>(
  {} as WorkersContextValue,
);

type WorkersContextProviderProps = {
  children: ReactNode;
};

export default function WorkersContextProvider(props: WorkersContextProviderProps) {
  const { children } = props;

  const [workers, setWorkers] = useState<Worker[]>([])
  const [selectedWorker, setSelectedWorker] = useState<Worker>()

  const addWorker = useCallback((name: string) => {
    const newWorker: Worker = {id: faker.string.uuid(), name}
    setWorkers([...workers, newWorker])
  },[workers])

  const putFirstToLastPosition = useCallback(() => {
    if(workers.length === 0) return
    const workersArray = [...workers]
    const firstWorker = workersArray.shift()
    workersArray.push(firstWorker!)
    setWorkers(workersArray)
  },[workers])

  const deleteWorker = useCallback((workerId: string) => {
    const workersArray = [...workers]
    const filteredWorkers = workersArray.filter(({id}) => workerId !== id)
    setWorkers(filteredWorkers)
  },[workers])

  const cleanList = useCallback(() => {
    setWorkers([])
  },[])
    
  const value: WorkersContextValue = React.useMemo(() => ({
    selectedWorker,
    setSelectedWorker,
    workers,
    setWorkers, 
    addWorker,
    putFirstToLastPosition,
    deleteWorker,
    cleanList
  }), [addWorker, cleanList, deleteWorker, putFirstToLastPosition, selectedWorker, workers]);

  return (
    <WorkersContext.Provider value={value}>
      {children}
    </WorkersContext.Provider>
  );
}
