import https from 'https';

const urls = [
    'https://play.google.com/store/apps/details?id=com.ConnectGate.android'
];

async function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
}

async function main() {
    const results = [];
    for (const url of urls) {
        try {
            const html = await fetchUrl(url);

            const titleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
            let title = titleMatch ? titleMatch[1].trim() : 'Unknown App';
            // Remove " - Apps on Google Play"
            if (title.includes(" - Apps on Google Play")) {
                title = title.split(" - Apps on Google Play")[0];
            }

            const descMatch = html.match(/<meta property="og:description" content="(.*?)"/);
            const desc = descMatch ? descMatch[1].trim() : 'No description available.';

            const imgMatch = html.match(/<meta property="og:image" content="(.*?)"/);
            const image = imgMatch ? imgMatch[1] : '';

            results.push({
                title,
                description: desc,
                tags: ["Flutter", "Dart", "Firebase"],
                image,
                playStore: url
            });
            console.log(`Fetched: ${title}`);
        } catch (e) {
            console.error(`Failed to fetch ${url}: ${e}`);
        }
    }

    console.log("FINAL_JSON=" + JSON.stringify(results, null, 2));
}

main();
