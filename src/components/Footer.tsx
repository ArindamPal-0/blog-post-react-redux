function Footer() {
    return (
        <footer className="flex flex-col items-center justify-start gap-2 bg-amber-500 py-4 text-xl text-white">
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
