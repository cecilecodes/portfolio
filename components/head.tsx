import Head from 'next/head';

interface CustomHeadProps {
  title?: string;
  description?: string;
}

export default function CustomHead({
  title = 'Hyunji Cecile Park',
  description = 'Hyunji Cecile Park - Personal Website',
}: CustomHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        href="/hyunji-pic.jpeg"
        type="image/jpeg"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://pbs.twimg.com/profile_images/1728638195871674368/X979dM1Q_400x400.jpg"
      />
      <meta property="og:url" content="https://hyunjipark.com" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://pbs.twimg.com/profile_images/1728638195871674368/X979dM1Q_400x400.jpg"
      />
    </Head>
  );
}
