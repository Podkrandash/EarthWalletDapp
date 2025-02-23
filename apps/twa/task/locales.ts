import * as fs from 'fs-extra';

console.log('Copy Locales');
const srcDir = `../../packages/locales/dist/locales`;
const devDestDir = `dist/locales`;

fs.rmSync(devDestDir, { recursive: true, force: true });
if (!fs.existsSync(devDestDir)) {
    fs.mkdirSync(devDestDir, { recursive: true });
}
fs.copySync(srcDir, devDestDir, { overwrite: true });

// Create Vercel config
const vercelConfig = {
    "version": 2,
    "builds": [
        {
            "src": "**",
            "use": "@vercel/static"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/$1"
        },
        {
            "handle": "filesystem"
        },
        {
            "src": "/.*",
            "dest": "/index.html"
        }
    ],
    "headers": [
        {
            "source": "/(.*)",
            "headers": [
                {
                    "key": "Access-Control-Allow-Origin",
                    "value": "*"
                }
            ]
        }
    ]
};

fs.writeFileSync('dist/vercel.json', JSON.stringify(vercelConfig, null, 4));
