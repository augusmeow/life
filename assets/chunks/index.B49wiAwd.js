const r=/[\u0000-\u001f]/g,c=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,o=/[\u0300-\u036F]/g,a=e=>e.normalize("NFKD").replace(o,"").replace(r,"").replace(c,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase();export{a as s};