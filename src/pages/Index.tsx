import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const speakers = {
    day1: [
      {
        time: '11:00–12:00',
        name: 'Владимир Ханжин',
        topic: 'Мгновенная самопрезентация',
        description: 'Умение произвести сильное первое впечатление при общении с инвесторами, партнёрами и клиентами.',
        details: 'Инструменты эффективной самопрезентации и отработка техник в реальных сценариях.'
      },
      {
        time: '12:00–12:45',
        name: 'Роман Войко',
        topic: 'Командообразование',
        description: 'Как собрать и удержать эффективную команду стартапа.',
        details: 'Методы формирования команды, укрепления взаимодействия и предотвращения конфликтов.'
      },
      {
        time: '12:45–13:10',
        name: 'Кофе-брейк',
        topic: 'Перерыв',
        description: 'Время для неформального общения и нетворкинга',
        details: ''
      },
      {
        time: '13:10–14:00',
        name: 'Сергей Харламов',
        topic: 'Как создаются стартапы и привлекаются деньги',
        description: 'Поиск финансирования и грамотное управление бюджетом.',
        details: 'Источники финансирования, планирование бюджета, оценка стоимости проекта на основе реального опыта резидента технопарка.'
      },
      {
        time: '13:00–20:00',
        name: 'Нетворкинг',
        topic: 'Старт-сессия по проектированию стартапов',
        description: 'Работа в группах',
        details: 'Практическая работа над проектами, обмен опытом и формирование команд.'
      }
    ],
    day2: [
      {
        time: '11:00–12:00',
        name: 'Евгений Кушников',
        topic: 'Интеллектуальные права в стартапе',
        description: 'Защита интеллектуальной собственности как стратегический инструмент.',
        details: 'Объекты интеллектуальных прав, алгоритм регистрации в РФ, типичные ошибки стартаперов, меры государственной поддержки.'
      },
      {
        time: '12:00–12:45',
        name: 'Илья Николаев',
        topic: 'Меры поддержки для технологических проектов',
        description: 'Государственные гранты, субсидии и акселерационные программы.',
        details: 'Поддержка студенческих стартапов, налоговые льготы для IT-проектов, региональные меры поддержки ХМАО-Югры.'
      },
      {
        time: '12:45–13:10',
        name: 'Кофе-брейк',
        topic: 'Перерыв',
        description: 'Время для неформального общения и нетворкинга',
        details: ''
      },
      {
        time: '13:10–14:00',
        name: 'Владимир Ханжин',
        topic: 'Нетворкинг и моделирование командной работы',
        description: 'Практическая работа в группах с разработкой концепции стартапа.',
        details: 'Техники нетворкинга, работа в группах по 5-7 человек, разработка концепции стартапа, презентации с обратной связью.'
      },
      {
        time: '13:00–20:00',
        name: 'Нетворкинг',
        topic: 'Старт-сессия по проектированию стартапов',
        description: 'Работа в группах',
        details: 'Практическая работа над проектами, обмен опытом и формирование команд.'
      }
    ]
  };

  const benefits = [
    {
      icon: 'Users',
      title: 'Экспертные знания от практиков',
      description: 'Учитесь у тех, кто уже прошёл путь создания и развития стартапов'
    },
    {
      icon: 'Target',
      title: 'Практические форматы',
      description: 'Прикладные навыки, которые можно применить сразу после мероприятия'
    },
    {
      icon: 'Network',
      title: 'Нетворкинг и партнёры',
      description: 'Знакомства с единомышленниками, инвесторами и потенциальными партнёрами'
    },
    {
      icon: 'Layers',
      title: 'Комплексный подход',
      description: 'Охват всех ключевых аспектов запуска стартапа — от идеи до финансирования'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon name="Rocket" size={16} />
              Школа 21
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              21 Стартап
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Двухдневный практический интенсив для предпринимателей
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-700 mb-8">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                <span className="font-semibold">18–19 декабря</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                <span>г. Сургут</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => window.open('https://forms.yandex.ru/u/693ada32f47e730e14c4f25e', '_blank')}
            >
              Зарегистрироваться
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              О мероприятии
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-xl leading-relaxed">
                Мероприятие «21 Стартап» — это двухдневный практический интенсив для предпринимателей, 
                стартаперов и всех, кто планирует запустить собственный проект.
              </p>
              <p className="text-xl leading-relaxed">
                Участники получат прикладные знания от экспертов, прокачают ключевые навыки 
                и заложат основу для развития своей бизнес-идеи.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Программа
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Выберите день для просмотра расписания
            </p>

            <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14">
                <TabsTrigger value="day1" className="text-base font-semibold">
                  18 декабря
                </TabsTrigger>
                <TabsTrigger value="day2" className="text-base font-semibold">
                  19 декабря
                </TabsTrigger>
              </TabsList>

              <TabsContent value="day1" className="animate-fade-in">
                <Accordion type="single" collapsible className="space-y-4">
                  {speakers.day1.map((speaker, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left w-full">
                          <div className="flex items-center gap-3 min-w-[140px]">
                            <Icon name="Clock" size={18} className="text-primary flex-shrink-0" />
                            <span className="font-semibold text-gray-900">{speaker.time}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900 mb-1">
                              {speaker.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{speaker.topic}</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pt-4 border-t space-y-3">
                          <p className="text-gray-700 leading-relaxed">{speaker.description}</p>
                          {speaker.details && (
                            <p className="text-gray-600 text-sm leading-relaxed">{speaker.details}</p>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="day2" className="animate-fade-in">
                <Accordion type="single" collapsible className="space-y-4">
                  {speakers.day2.map((speaker, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left w-full">
                          <div className="flex items-center gap-3 min-w-[140px]">
                            <Icon name="Clock" size={18} className="text-primary flex-shrink-0" />
                            <span className="font-semibold text-gray-900">{speaker.time}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900 mb-1">
                              {speaker.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{speaker.topic}</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pt-4 border-t space-y-3">
                          <p className="text-gray-700 leading-relaxed">{speaker.description}</p>
                          {speaker.details && (
                            <p className="text-gray-600 text-sm leading-relaxed">{speaker.details}</p>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Почему стоит прийти
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Что вы получите от участия в мероприятии
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon name={benefit.icon} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Зарегистрируйтесь сейчас и получите доступ к знаниям и нетворкингу с экспертами
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => window.open('https://forms.yandex.ru/u/693ada32f47e730e14c4f25e', '_blank')}
            >
              Зарегистрироваться
              <Icon name="ExternalLink" size={20} className="ml-2" />
            </Button>

            <div className="mt-16 pt-12 border-t border-gray-800">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Школа 21, г. Сургут</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={18} />
                  <span>18–19 декабря</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} />
                  <span>11:00–14:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;