export const fetchBenches = (data) => { 
  return $.ajax({ 
    method: 'GET', 
    url: 'api/benches', 
    data,
    errors: err => console.log(err)
  })
}

export const createBench = formData => { 
  console.log('bench_api_util' )
  
  return $.ajax({ 
    method: 'POST', 
    url: 'api/benches', 
    data: formData, 
    processData: false,
    contentType: false,
  })
}

export const fetchBench = id => { 
  return $.ajax({ 
    method: 'GET', 
    url: 'api/benches/' + id
  })
}

