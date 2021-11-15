import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Jochlain - GitHub</title>
                    <script src={`https://kit.fontawesome.com/${process.env.FA_KIT_TOKEN}.js`} crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
