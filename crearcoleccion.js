
dificultad = [3,1,2,4,5,3,3,2,1,4]

for(i = 1; i <=10; i++){
	db.cursos.insertOne(
			{
				_id: i,
				nombre: 'nombre'+i,
				dificultad: dificultad[i-1]
			}
			)
}
