import { Global, css } from '@emotion/react'

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 900;
          font-display: swap;
          src: local('Pretendard Black'),
            url('/src/assets/fonts/Pretendard-Black.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 800;
          font-display: swap;
          src: local('Pretendard ExtraBold'),
            url('/src/assets/fonts/Pretendard-ExtraBold.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 700;
          font-display: swap;
          src: local('Pretendard Bold'),
            url('/src/assets/fonts/Pretendard-Bold.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 600;
          font-display: swap;
          src: local('Pretendard SemiBold'),
            url('/src/assets/fonts/Pretendard-SemiBold.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 500;
          font-display: swap;
          src: local('Pretendard Medium'),
            url('/src/assets/fonts/Pretendard-Medium.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 400;
          font-display: swap;
          src: local('Pretendard Regular'),
            url('/src/assets/fonts/Pretendard-Regular.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 300;
          font-display: swap;
          src: local('Pretendard Light'),
            url('/src/assets/fonts/Pretendard-Light.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 200;
          font-display: swap;
          src: local('Pretendard ExtraLight'),
            url('/src/assets/fonts/Pretendard-ExtraLight.subset.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 100;
          font-display: swap;
          src: local('Pretendard Thin'),
            url('/src/assets/fonts/Pretendard-Thin.subset.woff2') format('woff2');
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        html {
          font-family: 'Pretendard';
        }
      `}
    />
  )
}
