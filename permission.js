
async function setPermToRead() {
    const name = new URLSearchParams(window.location.search).get('name');
    const account = await getCurrentAccount();
    const patientupdated = await window.contract.methods.setPermissionToRead(name).send({ from: account })
    
    updateStatus('Permission to Read Set.');
}


async function setPermToWrite() {
    const name = new URLSearchParams(window.location.search).get('name');
    const account = await getCurrentAccount();
    const patientupdated = await window.contract.methods.setPermissionToWrite(name).send({ from: account })
    updateStatus('Permission to Write Set.');
}

