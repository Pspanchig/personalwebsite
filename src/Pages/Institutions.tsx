import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Snow from './Snow';
import Ucmo from './Ucmo';
import NotFound from './NotFound';
import Navbar from '../Components/Shared/Navbar';
import EducationMenu from '../Components/EducationMenu/EducationMenu';

const Institutions: React.FC = () => {
    const [language] = useState<string>('En')
    
    const Education: React.FC = () => {
        return <main className='Institutions'> 
            <Navbar language={language} />
            <EducationMenu />
        </main>
    }

    return (      
    <Routes>
        <Route path='/' element={<Education />} />
        <Route path='/snow' element={<Snow />} />
        <Route path='/ucmo' element={<Ucmo />} />
        <Route path='/*' element={<NotFound />} />
    </Routes>      
    );
  }

export default Institutions;