import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="da">
                <Head>
                    <meta name="keywords" content="Kanpla"/>
                    <title>Kanpla</title>
                    <link rel="shortcut icon" href="/icons/icon_white.png" />
                    <script src="https://kit.fontawesome.com/5f85226895.js" crossorigin="anonymous"></script>
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript>
                </NextScript>
            </Html>
        )
    }
}

//I used a class here to extend Document