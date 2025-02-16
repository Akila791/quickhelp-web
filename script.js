function setLanguage(language) {
    const translations = {
        en: {
            "home-link": "Home",
            "about-link": "About Us",
            "login-link": "Login",
            "register-link": "Register",
            "jobs-link": "Job Categories",
            "hero-title": "Welcome to Home Maintenance Services",
            "hero-text": "Your one-stop solution for finding experienced technicians for all your home maintenance needs.",
            "sign-in-btn": "Sign In",
            "services-title": "Our Services",
            "plumbing-title": "Plumbing",
            "plumbing-text": "Find qualified plumbers for all your home repair needs.",
            "electrical-title": "Electrical",
            "electrical-text": "Experienced electricians are available for installations and repairs.",
            "carpentry-title": "Carpentry",
            "carpentry-text": "Skilled carpenters for all your furniture and woodwork projects.",
            "more-services-title": "More Services",
            "more-services-text": "Explore other maintenance services we offer.",
            "footer-home": "Home",
            "footer-about": "About Us",
            "footer-login": "Login",
            "footer-register": "Register",
            "footer-jobs": "Job Categories",
            "about-assembly-title": "About Assembly",
            "about-description": "Welcome to our assembly. We are a diverse and talented team dedicated to achieving excellence in our work. Our combined skills and experience allow us to tackle challenges and create innovative solutions together. Meet our team members below:",
            'channa': 'Channa',
            'channa-description': 'An expert in our field with a wealth of experience and a commitment to excellence.',
            'bhanuka': 'Bhanuka',
            'bhanuka-description': 'A dedicated team member with a strong background in our industry and a passion for innovation.',
            'akila': 'Akila',
            'akila-description': 'Focused on delivering quality and ensuring that our projects exceed expectations.',
            'tharushi': 'Tharushi',
            'tharushi-description': 'Bringing creativity and fresh ideas to our projects, ensuring we stay ahead of the curve.',
            'samadhi': 'Samadhi',
            'samadhi-description': 'A trusted and reliable team player, always ready to support and drive the team forward.',
            "register-title": "Register",
            "name-label": "Name:",
            "email-label": "Email:",
            "password-label": "Password:",
            "address-label": "Address:",
            "contact-label": "Contact Number:",
            "city-label": "City:",
            "role-label": "Role:",
            "job-role-label": "Job Role:",
            "photo-label": "Upload Photo:",
            "register-button": "Register",
            "designed-by": "Designed by team Linear X"
        },
        si: {
            "home-link": "මුල් පිටුව",
            "about-link": "අපි ගැන",
            "login-link": "ඇතුළුවන්න",
            "register-link": "ලියාපදිංචි වන්න",
            "jobs-link": "රැකියා කාණ්ඩ",
            "hero-title": "ඉහළ පළපුරුද්ද ඇති කාර්මිකයන්",
            "hero-text": "ඔබගේ නිවසේ නඩත්තු අවශ්‍යතා සඳහා පළපුරුද්ද ඇති කාර්මිකයන් සොයා ගන්න.",
            "sign-in-btn": "ඇතුළුවන්න",
            "services-title": "අපගේ සේවාවන්",
            "plumbing-title": "පිළිසුදු",
            "plumbing-text": "ඔබගේ නිවසේ නඩත්තු අවශ්‍යතා සඳහා සුදුසුකරුවන් සොයාගන්න.",
            "electrical-title": "විදුලි",
            "electrical-text": "ප්‍රවීණ විදුලි කාර්මිකයන් ස්ථාපන සහ නඩත්තු සඳහා.",
            "carpentry-title": "ලීවැසිකම",
            "carpentry-text": "ඔබගේ ගෘහ භාණ්ඩ හා ලීවැසිකම් කටයුතු සඳහා පළපුරුදු ලීවැසි ශිල්පීන්.",
            "more-services-title": "තවත් සේවාවන්",
            "more-services-text": "අපේ විවිධ නඩත්තු සේවාවන් අත්විඳින්න.",
            "footer-home": "මුල් පිටුව",
            "footer-about": "අපි ගැන",
            "footer-login": "ඇතුළුවන්න",
            "footer-register": "ලියාපදිංචි වන්න",
            "footer-jobs": "රැකියා කාණ්ඩ",
            "about-assembly-title": "අපගේ එකතුව",
            "about-description": "අපි අපගේ වැඩේදී සාර්ථකත්වය ඉටු කිරීමේ අරමුණ ඇති  පුහුණු කණ්ඩායමකි. අපගේ එකතු කරන ලද කුසලතා සහ පළපුරුද්ද අපට අභියෝග ජය ගැනීම සහ නවෝත්පාදන විසඳුම් නිර්මාණය කිරීමට ඉඩ සලසයි. අපේ කණ්ඩායම් සාමාජිකයන් පහත දැක්වෙයි:",
            'channa': 'චන්න',
            'channa-description': 'අපේ ක්ෂේත්‍රයේ විශේෂඥයෙක් සහ පළපුරුද්ද සහිත සහ අපේක්ෂාවන් සපුරාලන කෙනෙකි.',
            'bhanuka': 'භානුක',
            'bhanuka-description': 'අපේ කාර්යය ක්ෂේත්‍රයේ ශක්තිමත් පසුබැසීමක් සහ නවෝත්පාදනයේ උද්යෝගයක් ඇති කණ්ඩායම් සාමාජිකයෙකි.',
            'akila': 'අකිල',
            'akila-description': 'අපගේ ව්‍යාපෘති අපේක්ෂාවන් ඉක්මවීම සහ තත්ත්වය ලබා දීමේදී කටයුතු කරන කෙනෙකි.',
            'tharushi': 'තරුෂි',
            'tharushi-description': 'අපගේ ව්‍යාපෘති සඳහා නවතම අදහස් හා නිර්මාණශීලීත්වය ගෙන එන කෙනෙකි.',
            'samadhi': 'සමාධි',
            'samadhi-description': 'විශ්වාසනීය සහ ආශ්වාස දක්වන කණ්ඩායම් ක්‍රීඩකයෙකි, සෑම විටම සහාය හා කණ්ඩායම ඉදිරියට ගෙන යාමට සූදානම්.',
            "register-title": "සටහන් කරන්න",
                "name-label": "නම:",
                "email-label": "ඊමේල්:",
                "password-label": "මුරපදය:",
                "address-label": "ලිපිනය:",
                "contact-label": "සම්බන්ධතා අංකය:",
                "city-label": "නගරය:",
                "role-label": "භූමිකාව:",
                "job-role-label": "තනතුර:",
                "photo-label": "රූපයක් උඩුගත කරන්න:",
                "register-button": "සටහන් කරන්න",
            "designed-by": "නියාමනය කළේ කණ්ඩායම Linear X"
            
        }
    };

   
    const selectedLanguage = translations[language];

    document.querySelectorAll('[id]').forEach(element => {
        const id = element.id;
        if (selectedLanguage[id]) {
            element.innerText = selectedLanguage[id];
        }
    });

    document.querySelectorAll('[placeholder]').forEach(element => {
        const placeholder = element.placeholder;
        if (selectedLanguage[placeholder]) {
            element.placeholder = selectedLanguage[placeholder];
        }
    });

    document.querySelectorAll('input[type="submit"]').forEach(element => {
        if (element.value === "Login") {
            element.value = selectedLanguage["login-button"];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Set default language to English
    setLanguage('en');

    // Event listeners for language buttons
    document.querySelector('[onclick="setLanguage(\'en\')"]').addEventListener('click', () => setLanguage('en'));
    document.querySelector('[onclick="setLanguage(\'si\')"]').addEventListener('click', () => setLanguage('si'));
});




