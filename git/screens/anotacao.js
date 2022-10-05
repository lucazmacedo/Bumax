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
    
    <Text style={{ paddingLeft: 30, fontSize: 30, fontWeight: 'bold', color: '#303030'}}>Seja bem-vindo { data.nome }!</Text>
    
    
    /////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
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

          <TextInput  placeholder="Nome" onChangeText={setNome} />
          <TextInput  placeholder="Sobrenome" onChangeText={setSobrenome} />
          <TextInput  placeholder="Profissão" onChangeText={setProfissao} />
          <TextInput  placeholder="E-mail" onChangeText={setEmail} />
          <TextInput  placeholder="Senha" secureTextEntry onChangeText={setPassword} />
          <Button title="Criar conta" onPress={handleNewAccount} />
