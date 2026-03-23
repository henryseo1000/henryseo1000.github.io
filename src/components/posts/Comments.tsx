"use client";

import React, { useEffect } from "react";

export default function Comments () {

    useEffect(() => {
        const utterancesIframe = document.querySelector<HTMLIFrameElement>(
        "iframe.utterances-frame"
        );

        if (!utterancesIframe) return;

        // 테마 변경 메시지 전달
        utterancesIframe.contentWindow?.postMessage(
        {
            type: "set-theme"
        },
            "https://utteranc.es"
        );
    }, [])

    return (
        <div ref={(elem) => {
            if (!elem) {
                return;
            }
            const scriptElem = document.createElement('script');
            scriptElem.src = 'https://utteranc.es/client.js';
            scriptElem.async = true;
            scriptElem.setAttribute('repo', 'henryseo1000/henryseo1000.github.io');
            scriptElem.setAttribute('issue-term', 'title');
            scriptElem.setAttribute('theme', 'github-dark');
            scriptElem.setAttribute('label', 'blog-comment');
            scriptElem.crossOrigin = 'anonymous';
            elem.appendChild(scriptElem);
        }}>
        </div>
    )
}