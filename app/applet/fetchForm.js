import https from 'https';

https.get('https://docs.google.com/forms/d/e/1FAIpQLSeburrgaLYrnmSfm8FR0DGhW4AgFWXLbvU5jzq-kIGTRHUWgg/viewform', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/var FB_PUBLIC_LOAD_DATA_ = (\[.*\]);/);
    if (match) {
      const parsed = JSON.parse(match[1]);
      const fields = parsed[1][1];
      fields.forEach(f => {
        if (f[4] && f[4][0]) {
          console.log(`Title: ${f[1]}, ID: entry.${f[4][0][0]}`);
        }
      });
    } else {
      console.log('No match found');
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
