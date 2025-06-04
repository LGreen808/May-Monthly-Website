document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('rosterGrid')

    const render = list => {
       grid.innerHTML = ''
       list.forEach((p, i) => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'
            
            col.innerHTML = `
                    

               <div class="card h-100 shadow-sm">
                    <img src="${p.photo}" alt="${p.firstName} ${p.lastName}" class="card-img-top">
                    <div class="card-body text-center">
            <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
            <div class='badge badge-position badge-pos-${p.position}'>${p.position}</div>
            <p class="small text-muted mb-0">Age ${p.age}</p>
                    
        
            <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
  More Information
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal${i}" aria-labelledby="exampleModalLabel${i}" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel${i}">More Information</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h3>${p.hiddenFact}</h3>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Intresting</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>`
   

            grid.appendChild(col)
       }

       )
        

    }






render(players)
})