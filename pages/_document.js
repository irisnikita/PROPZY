import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Gtm, GtmLegacy } from '../components/Gtm'

export default class SiteDocument extends Document {
    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        const styleTags = sheet.getStyleElement();

        return (
            <html lang={`en`}>
                <Head>
                    {/* thêm google tag header  */}
                    {/* <div dangerouslySetInnerHTML={{ __html: Gtm() }} /> */}

                    {styleTags}
                </Head>

                <body>
                    {/* thêm google tag body */}
                    {/* <div dangerouslySetInnerHTML={{ __html: GtmLegacy() }} /> */}
                    {main}
                    <NextScript />
                </body>

            </html>
        )
    }
}