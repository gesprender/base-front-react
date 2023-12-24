/* eslint-disable react/no-children-prop */
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../layout/Layout';
import { Outlet } from 'react-router-dom';

export default function SEO({
  Component,
  Title = 'GesPrender Core',
  Description = 'Description Site.',
  Keywords = '',
  useLayout = true
}) {
  const Site = () => {
    if (useLayout) return <Layout children={Component} />;
    return (
      <Fragment>
        {Component}
        <Outlet />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <meta name="keywords" content={Keywords} />
        {/* google */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={Title} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <Site />
    </Fragment>
  );
}