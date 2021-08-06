import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function DishCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Плов"
                subheader="Серпень 6, 2021"
            />
            <CardMedia
                className={classes.media}
                image="./static/images/cards/plov.jpg"
                title="Pilaf  dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Запашний, смачнющий і пікантний плов: хто ж не любить цей смаколик? Скільки кухарів, стільки і рецептів плову. Але є основні правила, яких повинні дотримуватися всі. Про це і поговоримо нижче.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph><b>Інгредієнти для приготування 6 порцій страви знадобиться:</b></Typography>
                    <Typography paragraph>
                        Морква – 2 штуки;<br />
                        Свинина або курка – 500 г;<br />
                        Цибуля ріпчаста – 2 штуки;<br />
                        Рис – 2 склянки;<br />
                        Рослинна олія – 50 мл;<br />
                        Сіль – за смаком;<br />
                        Спеції для плову – за смаком;<br />
                        Часник.
                    </Typography>
                    <Typography paragraph>
                        <b>Процес приготування</b>
                    </Typography>
                    <Typography paragraph>
                        <b>1.</b> Для початку необхідно ретельно вимити м'ясо, обсушити його і нарізати на шматочки.
                    </Typography>
                    <Typography paragraph>
                        <b>2.</b> Після цього очистити, помити і нарізати тонкими півкільцями ріпчасту цибулю. А моркву очистити, помити і нарізати соломкою.
                    </Typography>
                    <Typography>
                        <b>3.</b> Розігріти казанок, налити в нього рослинну олію. Викласти підготовлену цибулю і смажити її до золотистого кольору близько 5-7 хвилин, помішуючи.
                    </Typography>
                    <Typography>
                        <b>4.</b> Викласти підготовлене м'ясо. Готувати до стану, коли м'ясо покриється засмаженою скоринкою, близько 10 хвилин.
                    </Typography>
                    <Typography>
                        <b>5.</b> Потім додати моркву. Обсмажити все разом, помішуючи, 3-5 хвилин.
                    </Typography>
                    <Typography>
                        <b>6.</b> Закип'ятити чайник. Обсмажені овочі і м'ясо залити окропом (вода повинна покривати м'ясо з овочами десь сантиметра на два). Посолити, поперчити, додати спеції для плову. Варити на середньому вогні 20 хвилин.
                    </Typography>
                    <Typography>
                        <b>7.</b> Додати рис, обережно розрівняти його по поверхні, але не перемішувати. В серединку помістити головку часнику. Долити води так, щоб вона покривала рис вище на 2 см. Варити плов на максимальному вогні без кришки майже до повного випаровування рідини, близько 10-15 хвилин.
                    </Typography>
                    <Typography>
                        <b>8.</b> Як тільки вода випарувалася, зробити мінімальний вогонь. В плові зробити кілька отворів ручкою ложки. Накрити кришкою і залишити на 15 хвилин.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
