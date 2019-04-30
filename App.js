import React, { Fragment } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';

  
  const blogList = [
    { id: 1, title: 'Restaurante 1', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 2,title: 'Restaurante 2', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 3, title: 'Restaurante 3', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 4,title: 'Restaurante 4', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 5, title: 'Restaurante 5', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 6,title: 'Restaurante 6', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 7, title: 'Restaurante 7', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 8,title: 'Restaurante 8', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 9, title: 'Restaurante 9', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 10,title: 'Restaurante 10', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 11, title: 'Restaurante 11', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 12,title: 'Restaurante 12', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
  ];

  const pratoList = [
    { id: 1, title: 'Restaurante 1', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 2,title: 'Restaurante 2', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 3, title: 'Restaurante 3', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 4,title: 'Restaurante 4', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 5, title: 'Restaurante 5', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 6,title: 'Restaurante 6', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 7, title: 'Restaurante 7', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 8,title: 'Restaurante 8', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 9, title: 'Restaurante 9', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 10,title: 'Restaurante 10', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
    { id: 11, title: 'Restaurante 11', author: 'Restaurante 1', author_avatar: 'https://u.tfstatic.com/restaurant_photos/658/69658/169/612/l-o-restaurante-marquise-3b9f9.jpg', cover_image_url: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sMFntMAG/5bda2ecee4b0180c86fe4d9c.jpg&w=620&h=400', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 12,title: 'Restaurante 12', author: 'Restaurante 2', author_avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6bSp76-JfHE2fX6pAHVvkA_-0pGJUunSArGXcJDNz2KivPT', cover_image_url: 'http://www.aguasclarasitupeva.com.br/wp-content/uploads/2017/11/comida.jpg', likes: 1290, comments: 129, time: '20 de Junho' },
  ];

  const notificationList = [
    { id: 1, name: 'Restaurante 1', avatar_url: 'https://assets.b9.com.br/wp-content/uploads/2017/12/Genies2-1280x720.png', last_notification: 'Lorem ipsum', time: '18:20 PM' },
    { id: 2, name: 'Restaurante 2', avatar_url: 'http://i.imgur.com/j8IABoq.jpg', last_notification: 'Lorem ipsum', time: '10:12 AM' },
  ];


  const Home = ({ blogList }) => (
    <Content>
     {blogList.map(blog => (
     <Card key={blog.id}>
       <CardItem>
         <Left>
           <Thumbnail source={{ uri: blog.author_avatar}} />
           <Body>
             <Text>{blog.title}</Text>
             <Text note>{blog.author}</Text>
           </Body>
         </Left>
       </CardItem>
       <CardItem cardBody>
         <Image source={{ uri: blog.cover_image_url}} style={{height: 200, width: null, flex: 1}}/>
       </CardItem>
       <CardItem>
         <Left>
           <Button transparent>
             <Icon active name="thumbs-up" />
             <Text>{blog.likes}</Text>
           </Button>
         </Left>
         <Body>
           <Button transparent>
             <Icon active />
             <Text>Acessar</Text>
           </Button>
         </Body>
       </CardItem>
       
     </Card>))}
   </Content>
 ); 

const Notification = ({notificationList}) => (
    <Fragment>
        <List>
            {notificationList.map(notification => (
                <ListItem avatar key={notification.id}>
                    <Left>
                        <Thumbnail source={{uri:notification.avatar_url}} />
                    </Left>
                    <Body>
                    <Text>{notification.name}</Text>
                    <Text note>{notification.last_notification}</Text>
                    </Body>
                    <Right>
                        <Text note>{notification.time}</Text>
                    </Right>
                </ListItem>
            ))}
        </List>
    </Fragment>
);
 
const logo_url = 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4';

const App = () => (
  <Container>
    <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
      <Left>
        <Thumbnail small source={{ uri: logo_url }} />
      </Left>
      <Body>
        <Title>Restaurante</Title>
      </Body>
    </Header>
    <View style={styles.container}>
    <Tabs>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
        <Home blogList={blogList}/>
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
        <Notification  notificationList={notificationList} />
      </Tab>
    </Tabs>
    </View>
  </Container>
);


export default App;

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#7159C1",
  },
  header: { 
    backgroundColor: "#7159C1",
  },
  container: {
    flex: 1,
  }
});