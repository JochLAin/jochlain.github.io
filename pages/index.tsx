import React, { useEffect } from 'react';

export default function Index() {
    useEffect(() => {
        let locale = localStorage.getItem('locale');
        if (!locale) {
            try {
                locale = navigator.language.split('-')[0];
            } catch (e) {
                locale = 'fr';
            }
        }
        if (!['en', 'fr'].includes(locale)) locale = 'en';
        document.location.href = `/${locale}`;
    }, []);

    return null;
}
