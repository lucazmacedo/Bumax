    // Dados do usuário no Firestore
    const [data, setData] = useState([]);
    const getUsers = () => {
      firestore()
      .collection("users")
      //.where("email", "==", user.email)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("User not found")
          return;
        } 
        const usuario = querySnapshot.docs[0].data();

        // Imprime os dados do usuário na tela
        setData(usuario);
        //console.log(x)
      }) 
    .catch((error) => console.log(error));
    }
    

    // useEffect
    useEffect(() => {
      
      // OBS: Impede que o usuário volte após o término do loading
      BackHandler.addEventListener('hardwareBackPress', () => {
        return true
      });

      // Buscar dados Firestore
      getUsers();

      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
      
    }, [])
    
    
    
    ////
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [profissao, setProfissao] = useState('');


  
    function handleNewAccount() {
        auth().createUserWithEmailAndPassword(email, password)

        firestore().collection('users')
        .add({
          nome,
          sobrenome,
          profissao,
          email,
        })
        .then(() => Alert.alert("Conta criada com sucesso"))
        .then(() => auth().signInWithEmailAndPassword(email, password))
        .catch((error) => console.log(error));
    }
