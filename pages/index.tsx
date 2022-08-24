import React, { useEffect } from 'react';

export default function Index() {
    useEffect(() => {
        let locale = localStorage.getItem('locale') || 'fr';
        if (!['en', 'fr'].includes(locale)) locale = 'fr';
        document.location.href = `/${locale}`;
    }, []);

    return null;
}
