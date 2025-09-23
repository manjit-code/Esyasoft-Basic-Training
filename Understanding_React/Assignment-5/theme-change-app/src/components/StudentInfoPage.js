import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'

export default function StudentInfoPage() {
    const { currTheme, setCurrTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        if (currTheme === 'light') setCurrTheme('dark');
        else setCurrTheme('light')
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div>
                <div style={{ textAlign: 'start', color:'red' }}>
                    <p>Student Information</p>
                    <div>
                        Name: Manjit Majhi <br />
                        Branch: Mechanical Engineering<br />
                        RollNo: 121BT0301<br />
                        College: NIT Rourkela
                    </div>
                    <button onClick={handleThemeChange} style={{ background: 'cyan' }}>Toggle Theme</button>
                </div>
            </div>
        </div>
    )
}
