
$(document).ready(function() {
    var url = "https://pixabay.com/api/?key=14010091-6fc887d8f179a5dc0fe818556&q=green+vegetable&image_type=photo&pretty=true";
    $.getJSON(
        url,
        function(data) {
            var result = "";
            data.hits.forEach(el=>{
               result += `
                <div class="card shadow-lg mt-4">
                    <div class="card-body">
                        <img src="${el.largeImageURL}" class="img-fluid">
                    </div>  
                    <div class="card-footer">
                        <img src="${el.userImageURL}" class="img-fluid rounded-circle" width="40">
                        ${el.tags}
                        <button type="button" class="btn btn-warning btn-sm float-right" data-toggle="modal" data-target="#views${el.id}" ">View</button>
                        <i class="material-icons float-left text-danger">favorite</i>
                    </div>
                </div>

                <!-- The Modal -->
                <div class="modal fade" id="views${el.id}">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    
                        <!-- Modal Header -->
                        <div class="modal-header">
                        <div class="modal-title text-uppercase text-info">
                        <img src="${el.userImageURL}" class="img-fluid rounded-circle" width="40">
                        &nbsp;
                            ${el.user}
                        </div>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <!-- Modal body -->
                        <div class="modal-body">
                            <img src="${el.largeImageURL}" class="img-fluid">
                            <hr>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group-item">
                                <i class="material-icons float-left text-success">thumb_up</i>
                                &nbsp;
                                ${el.likes}
                                </li>
                                <li class="list-group-item">
                                <i class="material-icons float-left text-danger">favorite</i>
                                &nbsp;
                                ${el.favorites}</li>
                                <li class="list-group-item">
                                <i class="material-icons float-left text-info">visibility</i>
                                &nbsp;
                                ${el.views}</li>
                                <li class="list-group-item">
                                <i class="material-icons float-left text-warning">comment</i>
                                &nbsp;
                                ${el.comments}</li>
                            </ul>
                        </div>
                        
                        
                        
                    </div>
                    </div>
                </div>
               `;
            });
            $('#result').append(result);
        }
    );
});