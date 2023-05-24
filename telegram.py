from pymongo import MongoClient
import logging
from aiogram import Bot,Dispatcher,executor,types
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher.filters.state import State, StatesGroup
from aiogram.dispatcher import FSMContext
import locale

client = MongoClient("mongodb+srv://akmaral:aktolkyn2018@cluster0.pcya0p3.mongodb.net/")
db = client["mydatabase"]
comments_collection = db["comments"]

locale.setlocale(locale.LC_ALL, '')
'ru_RU.utf8'
# Configure logging
logging.basicConfig(level = logging.INFO)
# Initialize bot and storage
bot = Bot(token = '6027542967:AAH634BtIzZSQiYOIn33WcV1-RQ_9v7bfk0') 
dp = Dispatcher(bot, storage = MemoryStorage())

class Command_States(StatesGroup):
    send_comment_in_db = State()
    send_news = State()

@dp.message_handler(commands=['comment'], state='*')
async def start_comment(msg: types.Message, state: FSMContext):
    await state.finish()
    await msg.reply("Отправь свой отзыв" + 
                    " или пожелание по улучшение мобильного приложения.\n"+
                    "Если есть какие-то ошибки, тоже отправь:")
    await Command_States.send_comment_in_db.set()

@dp.message_handler(content_types=['text'], 
                    state=Command_States.send_comment_in_db.set)
async def send_comment(msg=types.Message, state=FSMContext):
    review = {
        'user_id': msg.from_user.id,
        'username': msg.from_user.username,
        'review_text': msg.text
    }
    comments_collection.insert_one(review)
    await msg.reply("Спасибо за ваш отзыв!")
    await state.finish()

@dp.message_handler(commands=['create_news'], state='*')
async def create_news(msg: types.Message, state: FSMContext):
    await state.finish()
    await msg.reply("Напишите какие новости есть по приложению:")
    await Command_States.send_news.set()

@dp.message_handler(content_types=['text'], 
                    state=Command_States.send_news.set)
async def send_news(msg=types.Message, state=FSMContext):
    comments = comments_collection.find()
    for user in comments :
        await bot.send_message(chat_id=user['user_id'], text=msg.text)
    await state.finish()