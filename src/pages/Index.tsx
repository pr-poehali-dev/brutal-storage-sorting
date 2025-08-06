import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [jobFormData, setJobFormData] = useState({
    name: '',
    email: '',
    phone: '',
    telegram: '',
    message: '',
    resume: null as File | null
  });

  const [partnerFormData, setPartnerFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
    serviceType: ''
  });

  const handleJobInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setJobFormData({
      ...jobFormData,
      [e.target.name]: e.target.value
    });
  };

  const handlePartnerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPartnerFormData({
      ...partnerFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setJobFormData({
      ...jobFormData,
      resume: file
    });
  };

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка на работу отправлена:', jobFormData);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка от партнера отправлена:', partnerFormData);
  };

  const stats = [
    { number: '16+', label: 'Сортировочных центров' },
    { number: '500+', label: 'Сотрудников' },
    { number: '12', label: 'Городов присутствия' },
    { number: '5 лет', label: 'На рынке' }
  ];

  const services = [
    {
      icon: 'Package',
      title: 'ОТВЕТСТВЕННОЕ ХРАНЕНИЕ',
      description: 'Безопасное хранение товаров с полным контролем температуры и влажности',
      features: ['Контроль температуры', 'Система видеонаблюдения', 'Страхование грузов']
    },
    {
      icon: 'ArrowUpDown',
      title: 'СОРТИРОВКА ТОВАРОВ',
      description: 'Профессиональная сортировка по любым параметрам с высокой скоростью',
      features: ['Автоматизированная сортировка', 'Маркировка товаров', 'Контроль качества']
    },
    {
      icon: 'Truck',
      title: 'ЛОГИСТИКА',
      description: 'Полный цикл логистических услуг от приемки до отправки',
      features: ['Транспортировка', 'Экспедирование', 'Документооборот']
    },
    {
      icon: 'BarChart3',
      title: 'УЧЕТ И АНАЛИТИКА',
      description: 'Полный учет движения товаров и детальная отчетность',
      features: ['WMS система', 'Онлайн отчеты', 'Интеграция с 1С']
    },
    {
      icon: 'Shield',
      title: 'БЕЗОПАСНОСТЬ',
      description: 'Многоуровневая система безопасности складских помещений',
      features: ['Охрана 24/7', 'Контроль доступа', 'Пожарная сигнализация']
    },
    {
      icon: 'Clock',
      title: 'БЫСТРАЯ ОБРАБОТКА',
      description: 'Минимальные сроки обработки и отгрузки товаров',
      features: ['Приемка до 4 часов', 'Отгрузка в день заявки', 'Экспресс обработка']
    }
  ];

  const team = [
    { name: 'Александр Петров', position: 'Генеральный директор', experience: '15 лет в логистике' },
    { name: 'Мария Сидорова', position: 'Директор по операциям', experience: '12 лет в сфере складирования' },
    { name: 'Дмитрий Козлов', position: 'Начальник склада', experience: '8 лет управления складскими процессами' },
    { name: 'Елена Волкова', position: 'Менеджер по качеству', experience: '6 лет контроля качества услуг' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 w-12 h-12 flex items-center justify-center">
                <Icon name="Package" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-black">ЛОГИСТИКА СЕРВИС</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#partners" className="text-black hover:text-red-500 font-medium uppercase tracking-wide">
                Партнерам
              </a>
              <a href="#careers" className="text-black hover:text-red-500 font-medium uppercase tracking-wide">
                Карьера
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            СОРТИРОВКА
            <br />
            <span className="text-red-500">& ХРАНЕНИЕ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ ОТВЕТСТВЕННОГО ХРАНЕНИЯ И СОРТИРОВКИ ТОВАРОВ
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="brutal-button bg-red-500 text-white border-red-500 text-lg px-8 py-4 uppercase font-bold tracking-wide"
            >
              СТАТЬ ПАРТНЕРОМ
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="brutal-button bg-transparent text-white border-white text-lg px-8 py-4 uppercase font-bold tracking-wide hover:bg-white hover:text-black"
            >
              НАЙТИ РАБОТУ
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="brutal-card bg-white p-6 mb-4">
                  <h3 className="text-4xl font-bold text-red-500 mb-2">{stat.number}</h3>
                  <p className="text-black font-medium uppercase text-sm tracking-wide">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="partners" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-16">
              <TabsTrigger 
                value="partners" 
                className="text-lg font-bold uppercase tracking-wide data-[state=active]:bg-red-500 data-[state=active]:text-white brutal-button"
              >
                ДЛЯ ПАРТНЕРОВ
              </TabsTrigger>
              <TabsTrigger 
                value="careers" 
                className="text-lg font-bold uppercase tracking-wide data-[state=active]:bg-black data-[state=active]:text-white brutal-button"
              >
                ДЛЯ СОИСКАТЕЛЕЙ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="partners" className="space-y-12">
              {/* Partner Info */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-black">ПОЧЕМУ МЫ?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-500 p-2 flex-shrink-0">
                        <Icon name="Award" className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">ОПЫТ РАБОТЫ</h3>
                        <p className="text-gray-600">Более 5 лет успешной работы на рынке логистических услуг</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-500 p-2 flex-shrink-0">
                        <Icon name="MapPin" className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">ГЕОГРАФИЯ</h3>
                        <p className="text-gray-600">16+ сортировочных центров в 12 городах России</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-500 p-2 flex-shrink-0">
                        <Icon name="Handshake" className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">ПАРТНЕРСТВО С ЯНДЕКС МАРКЕТ</h3>
                        <p className="text-gray-600">Официальный партнер крупнейшей торговой площадки</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brutal-card bg-gray-100 p-0 overflow-hidden">
                  <img 
                    src="/img/85ce528f-1732-48f4-87bc-50a2069532fc.jpg" 
                    alt="Warehouse"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>

              {/* Services Grid */}
              <div>
                <h2 className="text-4xl font-bold mb-8 text-center text-black">НАШИ УСЛУГИ</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <Card key={index} className="brutal-card bg-white">
                      <CardHeader>
                        <div className="bg-red-500 w-12 h-12 flex items-center justify-center mb-4">
                          <Icon name={service.icon as any} className="text-white" size={24} />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 mb-4">
                          {service.description}
                        </CardDescription>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <div className="bg-black w-1 h-1"></div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Team Section */}
              <div>
                <h2 className="text-4xl font-bold mb-8 text-center text-black">НАША КОМАНДА</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
                  <div className="brutal-card bg-gray-100 p-0 overflow-hidden">
                    <img 
                      src="/img/fab5ec92-f511-4b0a-9c8f-a2375ee16fa3.jpg" 
                      alt="Team"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    {team.map((member, index) => (
                      <div key={index} className="brutal-card bg-white p-6">
                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                        <p className="text-red-500 font-medium mb-2 uppercase">{member.position}</p>
                        <p className="text-gray-600 text-sm">{member.experience}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Partner Contact Form */}
              <Card className="brutal-card bg-white max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-3xl text-center text-black">СТАТЬ ПАРТНЕРОМ</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Заполните форму для начала сотрудничества
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePartnerSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <Input
                        name="companyName"
                        placeholder="НАЗВАНИЕ КОМПАНИИ"
                        value={partnerFormData.companyName}
                        onChange={handlePartnerInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500"
                        required
                      />
                      <Input
                        name="contactName"
                        placeholder="КОНТАКТНОЕ ЛИЦО"
                        value={partnerFormData.contactName}
                        onChange={handlePartnerInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500"
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="EMAIL"
                        value={partnerFormData.email}
                        onChange={handlePartnerInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500"
                        required
                      />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="ТЕЛЕФОН"
                        value={partnerFormData.phone}
                        onChange={handlePartnerInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500"
                        required
                      />
                      <Input
                        name="serviceType"
                        placeholder="ИНТЕРЕСУЮЩИЕ УСЛУГИ"
                        value={partnerFormData.serviceType}
                        onChange={handlePartnerInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500"
                      />
                      <Textarea
                        name="message"
                        placeholder="ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ"
                        rows={4}
                        value={partnerFormData.message}
                        onChange={handlePartnerInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500 resize-none"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full brutal-button bg-red-500 text-white border-red-500 text-lg py-4 uppercase font-bold tracking-wide"
                    >
                      ОТПРАВИТЬ ЗАЯВКУ
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="careers" className="space-y-12">
              {/* Company Info */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="brutal-card bg-gray-100 p-0 overflow-hidden">
                  <img 
                    src="/img/8dcc9dec-66fd-433a-802f-5a12d4ec473c.jpg" 
                    alt="Team"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-black">РАБОТА У НАС</h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600">
                      ООО "Логистика Сервис" - динамично развивающаяся логистическая компания, которая ценит профессионализм и стремление к развитию.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-black w-2 h-2"></div>
                        <span className="text-gray-700">Конкурентная заработная плата</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-black w-2 h-2"></div>
                        <span className="text-gray-700">Полный социальный пакет</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-black w-2 h-2"></div>
                        <span className="text-gray-700">Возможности карьерного роста</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-black w-2 h-2"></div>
                        <span className="text-gray-700">Обучение и развитие персонала</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-black w-2 h-2"></div>
                        <span className="text-gray-700">Современное оборудование</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Contact Form */}
              <Card className="brutal-card bg-white max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-3xl text-center text-black">ОТКЛИК НА ВАКАНСИЮ</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Оставьте заявку и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleJobSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <Input
                        name="name"
                        placeholder="ИМЯ"
                        value={jobFormData.name}
                        onChange={handleJobInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500"
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="EMAIL"
                        value={jobFormData.email}
                        onChange={handleJobInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500"
                        required
                      />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="ТЕЛЕФОН"
                        value={jobFormData.phone}
                        onChange={handleJobInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500"
                        required
                      />
                      <Input
                        name="telegram"
                        placeholder="TELEGRAM (НЕ ОБЯЗАТЕЛЬНО)"
                        value={jobFormData.telegram}
                        onChange={handleJobInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500"
                      />
                      <div className="space-y-2">
                        <Label htmlFor="resume" className="text-lg font-bold uppercase tracking-wide">
                          РЕЗЮМЕ
                        </Label>
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleResumeUpload}
                          className="brutal-card border-2 border-black text-lg py-3"
                        />
                        {jobFormData.resume && (
                          <p className="text-sm text-gray-600">
                            Выбран файл: {jobFormData.resume.name}
                          </p>
                        )}
                      </div>
                      <Textarea
                        name="message"
                        placeholder="СОПРОВОДИТЕЛЬНОЕ ПИСЬМО"
                        rows={4}
                        value={jobFormData.message}
                        onChange={handleJobInputChange}
                        className="brutal-card border-2 border-black text-lg py-3 uppercase placeholder:text-gray-500 resize-none"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full brutal-button bg-black text-white border-black text-lg py-4 uppercase font-bold tracking-wide"
                    >
                      ОТПРАВИТЬ ЗАЯВКУ
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-red-500 w-12 h-12 flex items-center justify-center">
                  <Icon name="Package" className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">ЛОГИСТИКА СЕРВИС</h3>
              </div>
              <p className="text-gray-400">
                ООО "Логистика Сервис" - профессиональные услуги сортировки и ответственного хранения товаров
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 uppercase">КОНТАКТЫ</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (473) 123-45-67</p>
                <p>info@logistics-service.ru</p>
                <p>г. Воронеж, БЦ Столль</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 uppercase">УСЛУГИ</h4>
              <div className="space-y-2 text-gray-400">
                <p>Ответственное хранение</p>
                <p>Сортировка товаров</p>
                <p>Логистические решения</p>
                <p>Учет и аналитика</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ООО "ЛОГИСТИКА СЕРВИС". ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;