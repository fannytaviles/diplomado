import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    )
    return { ...page, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}