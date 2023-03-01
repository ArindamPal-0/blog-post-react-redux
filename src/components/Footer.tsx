function Footer() {
    return (
        <footer className="flex flex-col items-center justify-start gap-2 bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 py-4 text-xl text-black">
            <a
                href="https://github.com/ArindamPal-0/blog-post-react-redux"
                className="text-lg text-blue-600 underline hover:text-blue-400"
            >
                Github
            </a>
            <small>
                &copy; Copyright {new Date().getFullYear()}, Arindam Pal
            </small>
        </footer>
    );
}

export default Footer;
