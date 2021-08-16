import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="da">
                <Head>
                    <meta name="keywords" content="Kanpla"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"></meta>
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