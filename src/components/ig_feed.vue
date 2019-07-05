<template lang="pug" src="../templates/ig_feed.pug"></template>
<style lang="stylus" src="../stylesheets/ig_feed.styl"></style>

<script>
export default {
  name: 'IgFeed',
  data: () => {
    return {
      pics: [
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1560880726205-9FIHFKM4YPWTQZAICEOQ/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=500w',
        'https://static1.squarespace.com/static/579f2a6246c3c4b32bfb7524/579f4e3120099e276ae9ced5/5d0891d4050e0c0001178e04/1560842715536/?format=500w',
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1560476196738-9U1L5TMGBM8YW3IWW39V/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=300w',
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1560421479415-J3T4EGZE8KG5QB4GXNBU/ke17ZwdGBToddI8pDm48kBOU4qEwlNfMOAq4sqn8VJlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzx_8qNspmzZnIjtYy4ifXLaMrBFPlQalwOBERGsLAK2PVmixms_xtzZZjvfxEoSk4/image-asset.jpeg?format=300w',
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1560366828656-0UL2NKXUPU08FBLFEO8N/ke17ZwdGBToddI8pDm48kHem505q6McQd8XRhQc9zkRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxpEURhgSBEh9ILe0HKIG3CcOCklsxWwam3CdWF6Xw7jwVv5P97BEtB5XaVnmvMtTA/image-asset.jpeg?format=300w',
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1559555054311-MR7PQBSJO9MBE650E6UX/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=300w',
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1559467447188-AJX42A6HOH7QN0M69C7E/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=300w',
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1559307901689-8LFEX4P4OAB9OYSARZ0W/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=300w',
        'https://static1.squarespace.com/static/579f2a6246c3c4b32bfb7524/579f4e3120099e276ae9ced5/5cf1267aca61ec00011715b4/1559307906195/?format=300w',
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1554661843038-MP093A9VEVP8KIWRN648/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=300w',
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1554508672090-EVIJGBVK24AIA2D8BCL0/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=300w',
        'https://images.squarespace-cdn.com/content/v1/579f2a6246c3c4b32bfb7524/1553812526764-GZ3259JXEFH5IOGNLUEU/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=300w',
      ],
    }
  },
}
</script>
