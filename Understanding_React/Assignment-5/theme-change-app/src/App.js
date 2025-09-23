import { createContext, useState, useEffect } from 'react';
import StudentInfoPage from './components/StudentInfoPage';

const ThemeContext = createContext(null);
function App() {
  const [currTheme, setCurrTheme] = useState('light');
  const [currColor, setCurrColor] = useState('#FFFFFF');

  useEffect(() => {
    if (currTheme === 'light') setCurrColor('#FFFFFF');
    else setCurrColor('#636363')
  }, [currTheme])
  return (
    <ThemeContext.Provider value={
      {
        currTheme: currTheme,
        setCurrTheme: setCurrTheme
      }}>
      <div style={{ background: currColor, height: '100vh' }}>
        <StudentInfoPage />
      </div>
    </ThemeContext.Provider>
  );
}
export { ThemeContext }
export default App;
