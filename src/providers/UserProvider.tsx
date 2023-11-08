import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

type PropsType = {
  children: ReactNode;
};

type ContextProps = {
  currentMusicData: CurrentMusicDataType;
  setCurrentMusicData: Dispatch<SetStateAction<CurrentMusicDataType>>;
};

export const UserContext = createContext<ContextProps>({
  currentMusicData: {
    title: '',
    description: 0,
    midMusic: '',
    midData: {},
    bgSong: '',
    bgImage: '',
    delay: 0,
    volume: 0.1,
  },
  setCurrentMusicData: () => {},
});

const UserProvider = ({ children }: PropsType) => {
  const [currentMusicData, setCurrentMusicData] =
    useState<CurrentMusicDataType>({
      title: '',
      description: 0,
      midMusic: '',
      midData: {},
      bgSong: '',
      bgImage: '',
      delay: 0,
      volume: 0.1,
    });
  return (
    <UserContext.Provider
      value={{
        currentMusicData,
        setCurrentMusicData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
