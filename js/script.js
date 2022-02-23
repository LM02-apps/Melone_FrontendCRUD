

var data=[
    {
      "id": 10001,
      "birthDate": "1953-09-01",
      "firstName": "Georgi",
      "lastName": "Facello",
      "gender": "M",
      "hireDate": "1986-06-25",
    },
    {
      "id": 10002,
      "birthDate": "1964-06-01",
      "firstName": "Bezalel",
      "lastName": "Simmel",
      "gender": "F",
      "hireDate": "1985-11-20",
    },
    {
      "id": 10003,
      "birthDate": "1959-12-02",
      "firstName": "Parto",
      "lastName": "Bamford",
      "gender": "M",
      "hireDate": "1986-08-27T22:00:00.000+0000",
    },
    {
      "id": 10004,
      "birthDate": "1954-04-30",
      "firstName": "Chirstian",
      "lastName": "Koblick",
      "gender": "M",
      "hireDate": "1986-11-30",
  
    },
    {
      "id": 10005,
      "birthDate": "1955-01-20",
      "firstName": "Kyoichi",
      "lastName": "Maliniak",
      "gender": "M",
      "hireDate": "1989-09-11T22:00:00.000+0000",
  
    }
  ];
  var nextId=10006;

  $(document).ready(function()
  {

    Riempitabella();
  
    
    function Riempitabella()
    {
      var riga="";

      for(var i=0;i<data.length;i++)
      {
        riga += "<tr><td>"+data[i].id+"</td><td>"+data[i].firstName+"</td><td>"+data[i].lastName+"</td><td data-id= "+data[i].id+"><button type='button' class='btn btn-danger' id='remove'>Elimina</button></td></tr>";
      }
      $("tbody").html(riga);
    }



    
    
    $("#add").click(function()
    {
      $('#myModal').modal('show'); 
      
      $("#addworker").click(function()
      {
        var nome=$('#inputnome').val();
        var cognome=$('#inputcognome').val();

        nextId++;
        

        $('tbody').append("<tr><td>"+nextId+"</td><td>"+nome+"</td><td>"+cognome+"</td><td data-id= "+nextId+"><button type='button' class='btn btn-danger' id='remove'>Elimina</button></td></tr>");
     
        $('#myModal').modal('hide'); 
      });
    });

    $("#infotable").on('click', '#remove', function()
    {
        $(this).closest('tr').remove();
        
    });

  });