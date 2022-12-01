import Head from 'next/head'
import { Button } from '../../components/atoms/Button'
import { Card } from '../../components/atoms/Card'
import { Layout } from '../../components/layout/Layout'

export default function Components() {
  return (
    <div>
      <Head>
        <title>Summer Starter</title>
        <meta name="Summer Starter Description" content="Summer Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div className="flex-wrap-3">
          <Card>
            <h1>Card</h1>
            <p>Card Component that takes react node as a child</p>
          </Card>
          <Card>
            <h1>Buttons</h1>
            <p>Buttons pre styled with variable.scss and accept text, link and isLink input</p>
            <div className="flex-wrap-3">
              <Button buttonStyle="primary">Primary</Button>
              <Button buttonStyle="secondary">Secondary</Button>
              <Button buttonStyle="primary" isLink={true} href="https://www.google.com">Primary Link</Button>
              <Button buttonStyle="secondary" isLink={true} isOpenNewWindow={true} href="https://www.google.com">Secondary Link out</Button>
            </div>
          </Card>
        </div>
      </main>
      </Layout>

    </div>
  )
}
