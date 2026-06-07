import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Home,
  TrendingUp,
  FileText,
  Brain,
  Activity,
  Settings,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Bell,
  User,
  CheckCircle,
  TrendingDown,
  DollarSign,
  Clock,
  ArrowUpRight,
  Plane,
  ShoppingBag,
  Download,
  Copy,
  ChevronDown,
  Sliders,
  Monitor,
  RefreshCw,
  FileDown,
  Eye,
  Compass,
  Scale,
  Gavel,
  BookOpen,
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';

// Register Chart.js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [notifications, setNotifications] = useState(3);
  const [currentDate, setCurrentDate] = useState('');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const today = new Date();
    const formatted = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    setCurrentDate(formatted);
  }, []);

  return (
    <div id="root">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-icon">
            <Shield size={22} fill="currentColor" style={{ opacity: 0.9 }} />
          </div>
          <div className="logo-text">
            <h1>PriceShield</h1>
            <p>算法智能识别平台</p>
          </div>
        </div>

        <ul className="nav-list">
          <li
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <Home />
            <span>首 页</span>
          </li>
          <li
            className={`nav-item ${activeTab === 'analysis' ? 'active' : ''}`}
            onClick={() => setActiveTab('analysis')}
          >
            <TrendingUp />
            <span>价格分析</span>
          </li>
          <li
            className={`nav-item ${activeTab === 'report' ? 'active' : ''}`}
            onClick={() => setActiveTab('report')}
          >
            <FileText />
            <span>检测报告</span>
          </li>
          <li
            className={`nav-item ${activeTab === 'insight' ? 'active' : ''}`}
            onClick={() => setActiveTab('insight')}
          >
            <Brain />
            <span>AI 洞察</span>
          </li>
          <li
            className={`nav-item ${activeTab === 'monitoring' ? 'active' : ''}`}
            onClick={() => setActiveTab('monitoring')}
          >
            <Activity />
            <span>平台监控</span>
          </li>
          <li
            className={`nav-item ${activeTab === 'rights' ? 'active' : ''}`}
            onClick={() => setActiveTab('rights')}
          >
            <Scale />
            <span>个人维权</span>
          </li>
        </ul>

        <div className="sidebar-footer">
          <li
            className="nav-item"
            onClick={toggleTheme}
            style={{ marginBottom: '12px' }}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
            <span>{theme === 'dark' ? '浅色模式' : '深色模式'}</span>
          </li>
          <li
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
            style={{ marginBottom: '16px' }}
          >
            <Settings />
            <span>设置中心</span>
          </li>
          <div className="sidebar-footer-card">
            <h4>守护你的每一笔消费</h4>
            <p>AI技术识别价格歧视，捍卫消费者公平交易权利。</p>
          </div>
        </div>
      </aside>

      {/* Main Panel Content Area */}
      <main className="main-content">
        <header className="top-header">
          <div className="header-welcome">
            <h2>欢迎回来，用户 👋</h2>
            <p>
              {activeTab === 'home' && '这是您今天的价格歧视检测概览'}
              {activeTab === 'analysis' && '多维度分析价格差异，识别潜在的大数据杀熟行为'}
              {activeTab === 'report' && '上传您的账单，通过AI反推算法定价因子，生成维权报告'}
              {activeTab === 'insight' && '进入算法模拟沙盘，交互式探索定价歧视的形成规则'}
              {activeTab === 'monitoring' && '实时监测全国主流平台价格波动，洞察价格偏离率'}
              {activeTab === 'rights' && '提供科学维权引导、证据清单模板、公开维权案例及法律依据支撑'}
              {activeTab === 'settings' && '定制您的隐私盾与风险扫描偏好设置'}
            </p>
          </div>
          <div className="header-actions">
            <div className="date-badge">
              <Calendar size={14} />
              <span>{currentDate}</span>
            </div>
            <button className="icon-button" onClick={() => setNotifications(0)}>
              <Bell size={18} />
              {notifications > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '8px',
                    height: '8px',
                    background: '#ff4d4d',
                    borderRadius: '50%'
                  }}
                />
              )}
            </button>
            <div className="user-profile">
              <div className="avatar">
                <div className="avatar-inner">AI</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600' }}>超级VIP</span>
                <span style={{ fontSize: '11px', color: '#9ca3af' }}>已激活隐私盾</span>
              </div>
            </div>
          </div>
        </header>

        {/* View Router */}
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
        {activeTab === 'analysis' && <AnalysisView />}
        {activeTab === 'report' && <ReportView />}
        {activeTab === 'insight' && <InsightView />}
        {activeTab === 'monitoring' && <MonitoringView />}
        {activeTab === 'rights' && <RightsProtectionView />}
        {activeTab === 'settings' && <SettingsView />}

        <footer style={{ marginTop: '48px', paddingBottom: '24px', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '24px' }}>
          <p style={{ fontSize: '12px', color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Shield size={12} style={{ color: '#00f2fe' }} />
            PriceShield 反大数据杀熟平台 © 2026. 纯前端交互系统设计 · 专为比赛研制。平台不存储您的个人账单。
          </p>
        </footer>
      </main>
    </div>
  );
}

// -------------------------------------------------------------
// 1. HOME VIEW (首页)
// -------------------------------------------------------------
function HomeView({ setActiveTab }) {
  const [period, setPeriod] = useState('30天');
  const [selectedProduct, setSelectedProduct] = useState('机票');
  const [clickedPoint, setClickedPoint] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (clickedPoint) {
        const isPopup = e.target.closest('.chart-clicked-popup');
        const isCanvas = e.target.closest('canvas');
        if (!isPopup && !isCanvas) {
          setClickedPoint(null);
        }
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [clickedPoint]);

  // Master timelines for different products to avoid y-axis compression and look realistic
  const MASTER_TIMELINES = {
    '机票': [
      { label: '02-20', paid: 1120, avg: 900 },
      { label: '02-27', paid: 1200, avg: 950 },
      { label: '03-05', paid: 1380, avg: 1100 },
      { label: '03-12', paid: 980, avg: 850 },
      { label: '03-19', paid: 1420, avg: 1150 },
      { label: '03-26', paid: 1080, avg: 910 },
      { label: '04-02', paid: 890, avg: 750 },
      { label: '04-09', paid: 1100, avg: 920 },
      { label: '04-16', paid: 1750, avg: 1450 },
      { label: '04-20', paid: 1280, avg: 1100 },
      { label: '04-23', paid: 950, avg: 820 },
      { label: '04-26', paid: 1350, avg: 1150 },
      { label: '04-29', paid: 1420, avg: 1200 },
      { label: '05-02', paid: 1680, avg: 1350 },
      { label: '05-05', paid: 1150, avg: 980 },
      { label: '05-08', paid: 1246, avg: 1012 },
      { label: '05-13', paid: 1120, avg: 950 },
      { label: '05-14', paid: 1280, avg: 1080 },
      { label: '05-15', paid: 960, avg: 850 },
      { label: '05-16', paid: 1058, avg: 920 },
      { label: '05-17', paid: 1180, avg: 990 },
      { label: '05-18', paid: 1246, avg: 1012 },
      { label: '05-19', paid: 980, avg: 880 }
    ],
    '酒店': [
      { label: '02-20', paid: 620, avg: 510 },
      { label: '02-27', paid: 680, avg: 540 },
      { label: '03-05', paid: 720, avg: 590 },
      { label: '03-12', paid: 540, avg: 460 },
      { label: '03-19', paid: 780, avg: 630 },
      { label: '03-26', paid: 590, avg: 490 },
      { label: '04-02', paid: 480, avg: 410 },
      { label: '04-09', paid: 610, avg: 520 },
      { label: '04-16', paid: 850, avg: 710 },
      { label: '04-20', paid: 640, avg: 530 },
      { label: '04-23', paid: 520, avg: 440 },
      { label: '04-26', paid: 750, avg: 580 },
      { label: '04-29', paid: 790, avg: 620 },
      { label: '05-02', paid: 950, avg: 780 },
      { label: '05-05', paid: 620, avg: 510 },
      { label: '05-08', paid: 680, avg: 550 },
      { label: '05-13', paid: 610, avg: 520 },
      { label: '05-14', paid: 640, avg: 540 },
      { label: '05-15', paid: 580, avg: 490 },
      { label: '05-16', paid: 658, avg: 558 },
      { label: '05-17', paid: 720, avg: 590 },
      { label: '05-18', paid: 680, avg: 560 },
      { label: '05-19', paid: 590, avg: 510 }
    ],
    '手机': [
      { label: '02-20', paid: 6120, avg: 5900 },
      { label: '02-27', paid: 6200, avg: 5950 },
      { label: '03-05', paid: 6380, avg: 6100 },
      { label: '03-12', paid: 5980, avg: 5850 },
      { label: '03-19', paid: 6420, avg: 6150 },
      { label: '03-26', paid: 6080, avg: 5910 },
      { label: '04-02', paid: 5890, avg: 5750 },
      { label: '04-09', paid: 6100, avg: 5920 },
      { label: '04-16', paid: 6750, avg: 6450 },
      { label: '04-20', paid: 6220, avg: 5980 },
      { label: '04-23', paid: 6000, avg: 5810 },
      { label: '04-26', paid: 6350, avg: 6100 },
      { label: '04-29', paid: 6450, avg: 6120 },
      { label: '05-02', paid: 6800, avg: 6310 },
      { label: '05-05', paid: 6120, avg: 5950 },
      { label: '05-08', paid: 6246, avg: 6012 },
      { label: '05-13', paid: 6050, avg: 5950 },
      { label: '05-14', paid: 6180, avg: 5980 },
      { label: '05-15', paid: 6060, avg: 5910 },
      { label: '05-16', paid: 6158, avg: 5958 },
      { label: '05-17', paid: 6899, avg: 5999 },
      { label: '05-18', paid: 6246, avg: 6012 },
      { label: '05-19', paid: 6080, avg: 5910 }
    ],
    '外卖': [
      { label: '02-20', paid: 62, avg: 42 },
      { label: '02-27', paid: 60, avg: 41 },
      { label: '03-05', paid: 75, avg: 58 },
      { label: '03-12', paid: 95, avg: 60 },
      { label: '03-19', paid: 80, avg: 55 },
      { label: '03-26', paid: 58, avg: 45 },
      { label: '04-02', paid: 48, avg: 38 },
      { label: '04-09', paid: 65, avg: 48 },
      { label: '04-16', paid: 88, avg: 62 },
      { label: '04-20', paid: 62, avg: 42 },
      { label: '04-23', paid: 60, avg: 41 },
      { label: '04-26', paid: 75, avg: 58 },
      { label: '04-29', paid: 95, avg: 60 },
      { label: '05-02', paid: 88, avg: 62 },
      { label: '05-05', paid: 58, avg: 45 },
      { label: '05-08', paid: 62, avg: 48 },
      { label: '05-13', paid: 65, avg: 50 },
      { label: '05-14', paid: 72, avg: 55 },
      { label: '05-15', paid: 85, avg: 48 },
      { label: '05-16', paid: 62, avg: 45 },
      { label: '05-17', paid: 58, avg: 46 },
      { label: '05-18', paid: 65, avg: 48 },
      { label: '05-19', paid: 52, avg: 42 }
    ]
  };

  const YEAR_DATAS = {
    '机票': {
      labels: ['2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05'],
      paid: [1350, 1420, 1280, 1500, 1310, 1450, 1380, 1250, 1160, 1215, 1230, 1208],
      avg: [1150, 1210, 1080, 1300, 1100, 1250, 1180, 1050, 925, 960, 1055, 1002]
    },
    '酒店': {
      labels: ['2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05'],
      paid: [720, 850, 680, 890, 710, 780, 740, 690, 650, 658, 663, 673],
      avg: [590, 710, 560, 740, 590, 640, 610, 570, 525, 543, 544, 561]
    },
    '手机': {
      labels: ['2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05'],
      paid: [6400, 6500, 6290, 6800, 6520, 6610, 6580, 6430, 6160, 6215, 6250, 6284],
      avg: [5800, 5900, 5840, 5900, 6030, 6120, 6090, 5960, 5925, 6000, 6020, 5999]
    },
    '外卖': {
      labels: ['2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05'],
      paid: [78, 85, 68, 92, 75, 81, 74, 69, 61, 77, 70, 67],
      avg: [55, 61, 51, 65, 52, 58, 54, 49, 42, 55, 50, 49]
    }
  };

  const generatePlatformsForProduct = (product, paid, avg) => {
    if (product === '机票') {
      return [
        { name: '飞猪旅行', price: paid, logo: '飞', class: 'fliggy', color: '#ff4d4d', bgColor: '#ffd800', textColor: '#333' },
        { name: '淘宝网', price: Math.round((paid + avg) / 2 + 10), logo: '淘', class: 'taobao', color: '#ff9f43', bgColor: '#ff5000', textColor: '#fff' },
        { name: '携程旅行', price: Math.round(avg + 30), logo: '携', class: 'ctrip', color: '#ff9f43', bgColor: '#0086f6', textColor: '#fff' },
        { name: '同程旅行', price: avg, logo: '同', class: 'tongcheng', color: '#2ecc71', bgColor: '#7f00ff', textColor: '#fff' }
      ].sort((a, b) => b.price - a.price);
    } else if (product === '酒店') {
      return [
        { name: '携程旅行', price: paid, logo: '携', class: 'ctrip', color: '#ff4d4d', bgColor: '#0086f6', textColor: '#fff' },
        { name: '飞猪旅行', price: Math.round((paid + avg) / 2 + 5), logo: '飞', class: 'fliggy', color: '#ff9f43', bgColor: '#ffd800', textColor: '#333' },
        { name: '美团酒店', price: Math.round(avg + 15), logo: '美', class: 'meituan', color: '#ff9f43', bgColor: '#ffd000', textColor: '#333' },
        { name: '同程旅行', price: avg, logo: '同', class: 'tongcheng', color: '#2ecc71', bgColor: '#7f00ff', textColor: '#fff' }
      ].sort((a, b) => b.price - a.price);
    } else if (product === '手机') {
      return [
        { name: '淘宝', price: paid, logo: '淘', class: 'taobao', color: '#ff4d4d', bgColor: '#ff5000', textColor: '#fff' },
        { name: '京东', price: Math.round((paid + avg) / 2 + 100), logo: '东', class: 'jd', color: '#ff9f43', bgColor: '#ff1e32', textColor: '#fff' },
        { name: '苏宁易购', price: Math.round(avg + 80), logo: '苏', class: 'suning', color: '#ff9f43', bgColor: '#ffd000', textColor: '#333' },
        { name: '拼多多', price: avg, logo: '拼', class: 'pinduoduo', color: '#2ecc71', bgColor: '#e02e24', textColor: '#fff' }
      ].sort((a, b) => b.price - a.price);
    } else { // 外卖
      return [
        { name: '美团外卖', price: paid, logo: '美', class: 'meituan', color: '#ff4d4d', bgColor: '#ffd000', textColor: '#333' },
        { name: '饿了么', price: Math.round(avg + 3), logo: '饿', class: 'eleme', color: '#ff9f43', bgColor: '#008bf8', textColor: '#fff' },
        { name: '抖音外卖', price: Math.round(avg + 2), logo: '抖', class: 'douyin', color: '#ff9f43', bgColor: '#2f1b2f', textColor: '#fff' },
        { name: '闪送', price: avg, logo: '闪', class: 'shansong', color: '#2ecc71', bgColor: '#2ecc71', textColor: '#fff' }
      ].sort((a, b) => b.price - a.price);
    }
  };

  const handlePeriodChange = (p) => {
    setPeriod(p);
    setClickedPoint(null);
  };

  const handleProductChange = (prod) => {
    setSelectedProduct(prod);
    setClickedPoint(null);
  };

  const getChartDataForPeriod = (p, prod) => {
    if (p === '7天') {
      const slice = MASTER_TIMELINES[prod].slice(16);
      return {
        labels: slice.map(item => item.label),
        paid: slice.map(item => item.paid),
        avg: slice.map(item => item.avg),
        platforms: slice.map(item => generatePlatformsForProduct(prod, item.paid, item.avg))
      };
    } else if (p === '30天') {
      const slice = MASTER_TIMELINES[prod].slice(9);
      return {
        labels: slice.map(item => item.label),
        paid: slice.map(item => item.paid),
        avg: slice.map(item => item.avg),
        platforms: slice.map(item => generatePlatformsForProduct(prod, item.paid, item.avg))
      };
    } else if (p === '90天') {
      return {
        labels: MASTER_TIMELINES[prod].map(item => item.label),
        paid: MASTER_TIMELINES[prod].map(item => item.paid),
        avg: MASTER_TIMELINES[prod].map(item => item.avg),
        platforms: MASTER_TIMELINES[prod].map(item => generatePlatformsForProduct(prod, item.paid, item.avg))
      };
    } else {
      const yearData = YEAR_DATAS[prod];
      return {
        labels: yearData.labels,
        paid: yearData.paid,
        avg: yearData.avg,
        platforms: yearData.paid.map((val, idx) => generatePlatformsForProduct(prod, val, yearData.avg[idx]))
      };
    }
  };

  const currentData = getChartDataForPeriod(period, selectedProduct);

  const lineChartData = {
    labels: currentData.labels,
    datasets: [
      {
        label: '你的实际支付价格',
        data: currentData.paid,
        borderColor: '#00f2fe',
        borderWidth: 3,
        pointBackgroundColor: '#00f2fe',
        pointHoverRadius: 7,
        pointRadius: 4,
        tension: 0.4,
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(0, 242, 254, 0.18)');
          gradient.addColorStop(1, 'rgba(0, 242, 254, 0)');
          return gradient;
        }
      },
      {
        label: '市场平均价格',
        data: currentData.avg,
        borderColor: '#7f00ff',
        borderWidth: 2,
        pointBackgroundColor: '#7f00ff',
        pointHoverRadius: 6,
        pointRadius: 3,
        borderDash: [5, 5],
        tension: 0.4,
        fill: false
      }
    ]
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.02)' },
        ticks: { color: '#9ca3af', font: { size: 10 } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.02)' },
        ticks: {
          color: '#9ca3af',
          font: { size: 10 },
          callback: (value) => `¥${value}`
        }
      }
    }
  };

  const handleChartClick = (event) => {
    const chart = chartRef.current;
    if (!chart) return;

    const activeElements = chart.getElementsAtEventForMode(
      event.nativeEvent,
      'index',
      { intersect: false },
      true
    );

    if (activeElements.length > 0) {
      const { index, datasetIndex } = activeElements[0];
      const meta = chart.getDatasetMeta(datasetIndex);
      const element = meta.data[index];

      const label = chart.data.labels[index];
      const paid = chart.data.datasets[0].data[index];
      const avg = chart.data.datasets[1].data[index];
      const platforms = currentData.platforms[index] || [];

      const chartWidth = chart.width;
      const isLeft = element.x > chartWidth / 2;

      const clickY = event.nativeEvent.offsetY;
      const distY = Math.abs(clickY - element.y);

      if (distY <= 35) {
        setClickedPoint({
          index,
          x: element.x,
          y: element.y,
          label,
          paid,
          avg,
          platforms,
          isLeft
        });
      } else {
        setClickedPoint(null);
      }
    } else {
      setClickedPoint(null);
    }
  };

  return (
    <div style={{ animation: 'fade-in 0.4s ease' }}>
      {/* Top row cards */}
      <div className="grid-top">
        {/* Risk Gauge Card */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 className="card-title">
            今日价格歧视风险评分 ⓘ
            <span className="card-title-icon" onClick={() => setActiveTab('analysis')}>
              查看详情 <ChevronRight size={14} />
            </span>
          </h3>
          <div className="risk-gauge-container">
            <div className="gauge-chart-wrapper">
              <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                <circle
                  cx="90"
                  cy="90"
                  r="72"
                  fill="transparent"
                  stroke="rgba(255, 255, 255, 0.04)"
                  strokeWidth="12"
                />
                <circle
                  cx="90"
                  cy="90"
                  r="72"
                  fill="transparent"
                  stroke="url(#cyan-orange-grad)"
                  strokeWidth="12"
                  strokeDasharray="452.4"
                  strokeDashoffset="110"
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s ease' }}
                />
                <defs>
                  <linearGradient id="cyan-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4d4d" />
                    <stop offset="50%" stopColor="#ff9f43" />
                    <stop offset="100%" stopColor="#00f2fe" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="gauge-center-text">
                <div className="gauge-value">
                  78<span>/100</span>
                </div>
                <div className="gauge-label">风险较高 ↑</div>
              </div>
            </div>
            <div className="risk-metrics-list">
              <div className="risk-metric-header">检测到您在部分平台存在被算法价格歧视的可能</div>
              <div className="risk-metric-item">
                <div className="risk-metric-info">
                  <span className="risk-metric-name">价格差异显著</span>
                  <span className="risk-metric-value high">较高</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill pinkish" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="risk-metric-item">
                <div className="risk-metric-info">
                  <span className="risk-metric-name">大数据杀熟频率</span>
                  <span className="risk-metric-value medium">中等</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill blue" style={{ width: '55%' }}></div>
                </div>
              </div>
              <div className="risk-metric-item">
                <div className="risk-metric-info">
                  <span className="risk-metric-name">历史损失金额</span>
                  <span className="risk-metric-value high">较高</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill purple" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insight Highlight Card */}
        <div className="glass-panel ai-summary-card">
          <h3 className="card-title">✨ AI 分析摘要</h3>
          <div className="ai-summary-content">
            <div className="ai-summary-text-pane">
              <div className="ai-summary-headline">
                检测到你在 <span>3 个平台</span>的相同商品中，存在显著价格差异，最高溢价率达 <span>23%</span>。
              </div>
              <div className="ai-insight-list">
                <div className="ai-insight-item">
                  <div className="insight-icon-wrapper">
                    <Plane size={14} />
                  </div>
                  <div className="insight-item-body">
                    <h5>机票预订在周末搜索加价更高</h5>
                    <p>周末搜索同一航班的机票均价比工作日高约 18%</p>
                  </div>
                </div>
                <div className="ai-insight-item">
                  <div className="insight-icon-wrapper">
                    <ShoppingBag size={14} />
                  </div>
                  <div className="insight-item-body">
                    <h5>尊贵会员身份可能触发溢价因子</h5>
                    <p>您的高星级会员账号订房价格比非会员及新注册号高 12%</p>
                  </div>
                </div>
                <div className="ai-insight-item">
                  <div className="insight-icon-wrapper">
                    <Clock size={14} />
                  </div>
                  <div className="insight-item-body">
                    <h5>夜间加急订单更容易被“杀熟”</h5>
                    <p>在夜间 22:00-02:00 时段搜索打车或外卖，均价比白天高 15%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ai-3d-visual">
              <div className="ai-chip-glow"></div>
              <div className="ai-chip-cube">AI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle large chart and small sparks side metrics */}
      <div className="grid-middle">
        {/* large trend chart */}
        <div className="glass-panel trend-card" style={{ position: 'relative' }}>
          <div className="card-title" style={{ marginBottom: '16px' }}>
            <span>价格歧视趋势 ⓘ <span style={{ fontSize: '11px', fontWeight: 'normal', color: '#9ca3af', marginLeft: '6px' }}>（点击节点查看跨平台横向条状图）</span></span>
            <div className="chart-header-actions" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <div className="product-selector-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: '#9ca3af' }}>对比商品:</span>
                <select
                  value={selectedProduct}
                  onChange={(e) => handleProductChange(e.target.value)}
                  style={{
                    background: 'rgba(10, 16, 30, 0.6)',
                    color: '#00f2fe',
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    padding: '4px 24px 4px 8px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    outline: 'none',
                    cursor: 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2300f2fe' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 4px center',
                    backgroundSize: '16px',
                    boxShadow: '0 0 10px rgba(0, 242, 254, 0.1)',
                    transition: 'border-color 0.2s, box-shadow 0.2s'
                  }}
                >
                  <option value="机票" style={{ background: '#0b0f19', color: '#fff' }}>机票航线 (北京-上海)</option>
                  <option value="酒店" style={{ background: '#0b0f19', color: '#fff' }}>酒店住宿 (西湖大酒店)</option>
                  <option value="手机" style={{ background: '#0b0f19', color: '#fff' }}>数码电子 (iPhone 15 Pro)</option>
                  <option value="外卖" style={{ background: '#0b0f19', color: '#fff' }}>外卖餐饮 (家庭特惠套餐)</option>
                </select>
              </div>

              <div className="chart-legend" style={{ marginRight: 'auto' }}>
                <div className="legend-item">
                  <div className="legend-color teal"></div>
                  <span>您的实际支付</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color purple"></div>
                  <span>市场平均价格</span>
                </div>
              </div>

              <div className="time-tabs">
                <div
                  className={`time-tab ${period === '7天' ? 'active' : ''}`}
                  onClick={() => handlePeriodChange('7天')}
                >
                  7天
                </div>
                <div
                  className={`time-tab ${period === '30天' ? 'active' : ''}`}
                  onClick={() => handlePeriodChange('30天')}
                >
                  30天
                </div>
                <div
                  className={`time-tab ${period === '90天' ? 'active' : ''}`}
                  onClick={() => handlePeriodChange('90天')}
                >
                  90天
                </div>
                <div
                  className={`time-tab ${period === '1年' ? 'active' : ''}`}
                  onClick={() => handlePeriodChange('1年')}
                >
                  1年
                </div>
              </div>
            </div>
          </div>
          
          <div className="chart-wrapper">
            <Line ref={chartRef} data={lineChartData} options={lineChartOptions} onClick={handleChartClick} />
            
            {/* Custom Absoluted Popover Card on Point Click */}
            {clickedPoint && (
              <div
                className={`chart-clicked-popup ${clickedPoint.isLeft ? 'pop-left' : ''}`}
                style={{
                  left: `${clickedPoint.x}px`,
                  top: `${clickedPoint.y}px`
                }}
              >
                <div className="popup-header">
                  <span className="popup-date">📅 {clickedPoint.label} 监测比价</span>
                  <button className="popup-close" onClick={() => setClickedPoint(null)}>×</button>
                </div>
                <div className="popup-price-row">
                  <div>
                    <div className="popup-price-lbl">实际支付</div>
                    <div className="popup-price-val red">¥{clickedPoint.paid}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="popup-price-lbl">公允参考</div>
                    <div className="popup-price-val green">¥{clickedPoint.avg}</div>
                  </div>
                </div>
                
                {/* Horizontal Mini Bar Charts inside popover */}
                <div className="popup-mini-bars">
                  <div style={{ fontSize: '10px', color: '#6b7280', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6px', marginBottom: '2px', fontWeight: '500' }}>
                    横向价格链比对：
                  </div>
                  {clickedPoint.platforms.map((plat, pidx) => {
                    const maxVal = Math.max(...clickedPoint.platforms.map(p => p.price));
                    const widthPct = Math.round((plat.price / maxVal) * 100);
                    return (
                      <div key={pidx} className="popup-bar-item">
                        <div
                          className={`popup-bar-logo ${plat.class}`}
                          style={{
                            background: plat.bgColor || undefined,
                            color: plat.textColor || undefined
                          }}
                        >
                          {plat.logo}
                        </div>
                        <span className="popup-bar-name">{plat.name}</span>
                        <div className="popup-bar-track">
                          <div
                            className="popup-bar-fill"
                            style={{
                              width: `${widthPct}%`,
                              backgroundColor: plat.color,
                              boxShadow: `0 0 6px ${plat.color}66`
                            }}
                          ></div>
                        </div>
                        <span className="popup-bar-price">¥{plat.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* sparks widgets sidebar */}
        <div className="sparkline-card-list">
          <div className="glass-panel sparkline-card">
            <div className="sparkline-info">
              <h4>预估损失金额 ⓘ</h4>
              <div className="sparkline-value">¥2,356.00</div>
              <div className="sparkline-sub">
                较上月 <span className="up">↑ 18.6%</span>
              </div>
            </div>
            <div className="sparkline-icon red">
              <DollarSign size={20} />
            </div>
          </div>

          <div className="glass-panel sparkline-card">
            <div className="sparkline-info">
              <h4>高风险平台 ⓘ</h4>
              <div className="sparkline-value">飞猪旅行</div>
              <div className="sparkline-sub">
                风险评级: <span className="up">高风险</span>
              </div>
            </div>
            <div className="sparkline-icon orange">
              <AlertTriangle size={20} />
            </div>
          </div>

          <div className="glass-panel sparkline-card">
            <div className="sparkline-info">
              <h4>可疑订单数 ⓘ</h4>
              <div className="sparkline-value">12 次</div>
              <div className="sparkline-sub">
                较上月 <span className="up">↑ 33%</span>
              </div>
            </div>
            <div className="sparkline-icon purple">
              <Activity size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Latest Cases panel */}
      <div className="glass-panel latest-cases-card">
        <h3 className="card-title">
          最新可疑案例
          <span className="card-title-icon" onClick={() => setActiveTab('monitoring')}>
            查看全部 <ChevronRight size={14} />
          </span>
        </h3>
        <div className="cases-grid">
          {/* Card 1 */}
          <div className="glass-panel case-card glass-card-interactive" onClick={() => setActiveTab('report')}>
            <div className="case-header">
              <div className="case-platform-wrapper">
                <div className="platform-logo-img fliggy">飞</div>
                <div>
                  <div className="case-platform-name">飞猪旅行</div>
                  <div className="case-platform-type">机票预订</div>
                </div>
              </div>
              <div className="case-tag-red">差价率 23%</div>
            </div>
            <div className="case-body">
              <div className="case-details">
                <h4>北京 → 上海 单程航班机票</h4>
                <p>因高忠诚度会员身份加价</p>
              </div>
              <span className="case-date">2026-05-18</span>
            </div>
            <div className="case-pricing">
              <div className="case-price-item">
                你的实际支付: <span className="red">¥1,246</span>
              </div>
              <div className="case-price-item">
                市场均价: <span className="white">¥1,012</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel case-card glass-card-interactive" onClick={() => setActiveTab('report')}>
            <div className="case-header">
              <div className="case-platform-wrapper">
                <div className="platform-logo-img taobao">淘</div>
                <div>
                  <div className="case-platform-name">淘宝</div>
                  <div className="case-platform-type">手机商品</div>
                </div>
              </div>
              <div className="case-tag-orange">差价率 15%</div>
            </div>
            <div className="case-body">
              <div className="case-details">
                <h4>iPhone 15 Pro 256GB 黑色</h4>
                <p>iOS高端机型溢价算法诱导</p>
              </div>
              <span className="case-date">2026-05-17</span>
            </div>
            <div className="case-pricing">
              <div className="case-price-item">
                你的实际支付: <span className="red">¥6,899</span>
              </div>
              <div className="case-price-item">
                市场均价: <span className="white">¥5,999</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel case-card glass-card-interactive" onClick={() => setActiveTab('report')}>
            <div className="case-header">
              <div className="case-platform-wrapper">
                <div className="platform-logo-img ctrip">携</div>
                <div>
                  <div className="case-platform-name">携程旅行</div>
                  <div className="case-platform-type">酒店预订</div>
                </div>
              </div>
              <div className="case-tag-red">差价率 18%</div>
            </div>
            <div className="case-body">
              <div className="case-details">
                <h4>杭州西湖大酒店 豪华湖景房</h4>
                <p>新老用户定位偏差杀熟加价</p>
              </div>
              <span className="case-date">2026-05-16</span>
            </div>
            <div className="case-pricing">
              <div className="case-price-item">
                你的实际支付: <span className="red">¥658</span>
              </div>
              <div className="case-price-item">
                市场均价: <span className="white">¥558</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. PRICE ANALYSIS VIEW (价格分析)
// -------------------------------------------------------------
function AnalysisView() {
  const [subTab, setSubTab] = useState('trend');
  const [period, setPeriod] = useState('30天');
  const [selectedProduct, setSelectedProduct] = useState('机票');
  const [threshold, setThreshold] = useState(10);
  
  // Modal states
  const [showAllPlatformsModal, setShowAllPlatformsModal] = useState(false);
  const [modalActiveTab, setModalActiveTab] = useState('takeout');

  // Unified master timelines to match HomeView exactly
  const MASTER_TIMELINES = {
    '机票': [
      { label: '02-20', paid: 1120, avg: 900 },
      { label: '02-27', paid: 1200, avg: 950 },
      { label: '03-05', paid: 1380, avg: 1100 },
      { label: '03-12', paid: 980, avg: 850 },
      { label: '03-19', paid: 1420, avg: 1150 },
      { label: '03-26', paid: 1080, avg: 910 },
      { label: '04-02', paid: 890, avg: 750 },
      { label: '04-09', paid: 1100, avg: 920 },
      { label: '04-16', paid: 1750, avg: 1450 },
      { label: '04-20', paid: 1280, avg: 1100 },
      { label: '04-23', paid: 950, avg: 820 },
      { label: '04-26', paid: 1350, avg: 1150 },
      { label: '04-29', paid: 1420, avg: 1200 },
      { label: '05-02', paid: 1680, avg: 1350 },
      { label: '05-05', paid: 1150, avg: 980 },
      { label: '05-08', paid: 1246, avg: 1012 },
      { label: '05-13', paid: 1120, avg: 950 },
      { label: '05-14', paid: 1280, avg: 1080 },
      { label: '05-15', paid: 960, avg: 850 },
      { label: '05-16', paid: 1058, avg: 920 },
      { label: '05-17', paid: 1180, avg: 990 },
      { label: '05-18', paid: 1246, avg: 1012 },
      { label: '05-19', paid: 980, avg: 880 }
    ],
    '酒店': [
      { label: '02-20', paid: 620, avg: 510 },
      { label: '02-27', paid: 680, avg: 540 },
      { label: '03-05', paid: 720, avg: 590 },
      { label: '03-12', paid: 540, avg: 460 },
      { label: '03-19', paid: 780, avg: 630 },
      { label: '03-26', paid: 590, avg: 490 },
      { label: '04-02', paid: 480, avg: 410 },
      { label: '04-09', paid: 610, avg: 520 },
      { label: '04-16', paid: 850, avg: 710 },
      { label: '04-20', paid: 640, avg: 530 },
      { label: '04-23', paid: 520, avg: 440 },
      { label: '04-26', paid: 750, avg: 580 },
      { label: '04-29', paid: 790, avg: 620 },
      { label: '05-02', paid: 950, avg: 780 },
      { label: '05-05', paid: 620, avg: 510 },
      { label: '05-08', paid: 680, avg: 550 },
      { label: '05-13', paid: 610, avg: 520 },
      { label: '05-14', paid: 640, avg: 540 },
      { label: '05-15', paid: 580, avg: 490 },
      { label: '05-16', paid: 658, avg: 558 },
      { label: '05-17', paid: 720, avg: 590 },
      { label: '05-18', paid: 680, avg: 560 },
      { label: '05-19', paid: 590, avg: 510 }
    ],
    '手机': [
      { label: '02-20', paid: 6120, avg: 5900 },
      { label: '02-27', paid: 6200, avg: 5950 },
      { label: '03-05', paid: 6380, avg: 6100 },
      { label: '03-12', paid: 5980, avg: 5850 },
      { label: '03-19', paid: 6420, avg: 6150 },
      { label: '03-26', paid: 6080, avg: 5910 },
      { label: '04-02', paid: 5890, avg: 5750 },
      { label: '04-09', paid: 6100, avg: 5920 },
      { label: '04-16', paid: 6750, avg: 6450 },
      { label: '04-20', paid: 6220, avg: 5980 },
      { label: '04-23', paid: 6000, avg: 5810 },
      { label: '04-26', paid: 6350, avg: 6100 },
      { label: '04-29', paid: 6450, avg: 6120 },
      { label: '05-02', paid: 6800, avg: 6310 },
      { label: '05-05', paid: 6120, avg: 5950 },
      { label: '05-08', paid: 6246, avg: 6012 },
      { label: '05-13', paid: 6050, avg: 5950 },
      { label: '05-14', paid: 6180, avg: 5980 },
      { label: '05-15', paid: 6060, avg: 5910 },
      { label: '05-16', paid: 6158, avg: 5958 },
      { label: '05-17', paid: 6899, avg: 5999 },
      { label: '05-18', paid: 6246, avg: 6012 },
      { label: '05-19', paid: 6080, avg: 5910 }
    ],
    '外卖': [
      { label: '02-20', paid: 62, avg: 42 },
      { label: '02-27', paid: 60, avg: 41 },
      { label: '03-05', paid: 75, avg: 58 },
      { label: '03-12', paid: 95, avg: 60 },
      { label: '03-19', paid: 80, avg: 55 },
      { label: '03-26', paid: 58, avg: 45 },
      { label: '04-02', paid: 48, avg: 38 },
      { label: '04-09', paid: 65, avg: 48 },
      { label: '04-16', paid: 88, avg: 62 },
      { label: '04-20', paid: 62, avg: 42 },
      { label: '04-23', paid: 60, avg: 41 },
      { label: '04-26', paid: 75, avg: 58 },
      { label: '04-29', paid: 95, avg: 60 },
      { label: '05-02', paid: 88, avg: 62 },
      { label: '05-05', paid: 58, avg: 45 },
      { label: '05-08', paid: 62, avg: 48 },
      { label: '05-13', paid: 65, avg: 50 },
      { label: '05-14', paid: 72, avg: 55 },
      { label: '05-15', paid: 85, avg: 48 },
      { label: '05-16', paid: 62, avg: 45 },
      { label: '05-17', paid: 58, avg: 46 },
      { label: '05-18', paid: 65, avg: 48 },
      { label: '05-19', paid: 52, avg: 42 }
    ]
  };

  const YEAR_DATAS = {
    '机票': {
      labels: ['2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05'],
      paid: [1350, 1420, 1280, 1500, 1310, 1450, 1380, 1250, 1160, 1215, 1230, 1208],
      avg: [1150, 1210, 1080, 1300, 1100, 1250, 1180, 1050, 925, 960, 1055, 1002]
    },
    '酒店': {
      labels: ['2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05'],
      paid: [720, 850, 680, 890, 710, 780, 740, 690, 650, 658, 663, 673],
      avg: [590, 710, 560, 740, 590, 640, 610, 570, 525, 543, 544, 561]
    },
    '手机': {
      labels: ['2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05'],
      paid: [6400, 6500, 6290, 6800, 6520, 6610, 6580, 6430, 6160, 6215, 6250, 6284],
      avg: [5800, 5900, 5840, 5900, 6030, 6120, 6090, 5960, 5925, 6000, 6020, 5999]
    },
    '外卖': {
      labels: ['2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05'],
      paid: [78, 85, 68, 92, 75, 81, 74, 69, 61, 77, 70, 67],
      avg: [55, 61, 51, 65, 52, 58, 54, 49, 42, 55, 50, 49]
    }
  };

  const getChartDataForPeriod = (p, prod) => {
    if (p === '7天') {
      const slice = MASTER_TIMELINES[prod].slice(16);
      return {
        labels: slice.map(item => item.label),
        paid: slice.map(item => item.paid),
        avg: slice.map(item => item.avg)
      };
    } else if (p === '30天') {
      const slice = MASTER_TIMELINES[prod].slice(9);
      return {
        labels: slice.map(item => item.label),
        paid: slice.map(item => item.paid),
        avg: slice.map(item => item.avg)
      };
    } else if (p === '90天') {
      return {
        labels: MASTER_TIMELINES[prod].map(item => item.label),
        paid: MASTER_TIMELINES[prod].map(item => item.paid),
        avg: MASTER_TIMELINES[prod].map(item => item.avg)
      };
    } else {
      const yearData = YEAR_DATAS[prod];
      return {
        labels: yearData.labels,
        paid: yearData.paid,
        avg: yearData.avg
      };
    }
  };

  const currentData = getChartDataForPeriod(period, selectedProduct);

  const trendChartData = {
    labels: currentData.labels,
    datasets: [
      {
        label: '你的实际支付价格',
        data: currentData.paid,
        borderColor: '#00f2fe',
        borderWidth: 3,
        pointBackgroundColor: '#00f2fe',
        tension: 0.4,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(0, 242, 254, 0.12)');
          gradient.addColorStop(1, 'rgba(0, 242, 254, 0)');
          return gradient;
        }
      },
      {
        label: '市场平均价格',
        data: currentData.avg,
        borderColor: '#7f00ff',
        borderWidth: 2,
        tension: 0.4,
        fill: false
      }
    ]
  };

  const trendChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.02)' }, ticks: { color: '#9ca3af', font: { size: 10 } } },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.02)' },
        ticks: {
          color: '#9ca3af',
          font: { size: 10 },
          callback: (value) => `¥${value}`
        }
      }
    }
  };

  // Dynamic Donut calculations based on threshold
  const getDonutDataForThreshold = (t) => {
    let high = Math.round(1248 * (0.35 - t / 150));
    let medium = Math.round(1248 * (0.45 - t / 250));
    let low = Math.round(1248 * (0.12 - t / 350));
    if (high < 50) high = 50;
    if (medium < 100) medium = 100;
    if (low < 30) low = 30;
    let normal = 1248 - high - medium - low;
    
    return {
      labels: [`价格偏高 (>${t}%)`, `略高 (5%~${t}%)`, `正常 (-5%~5%)`, `偏低 (<-5%)`],
      data: [high, medium, normal, low],
      pcts: [
        Math.round((high / 1248) * 100),
        Math.round((medium / 1248) * 100),
        Math.round((normal / 1248) * 100),
        Math.round((low / 1248) * 100)
      ]
    };
  };

  const dynamicDonut = getDonutDataForThreshold(threshold);

  const donutData = {
    labels: dynamicDonut.labels,
    datasets: [
      {
        data: dynamicDonut.data,
        backgroundColor: ['#ff4d4d', '#ff9f43', '#00f2fe', '#2ecc71'],
        borderWidth: 0,
        hoverOffset: 4
      }
    ]
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    cutout: '75%'
  };

  // Time Analysis Hourly Area Chart
  const timeChartData = {
    labels: ['02:00', '06:00', '10:00', '12:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
    datasets: [
      {
        label: '平均价格偏离度 (%)',
        data: [26, 4, 12, 18, 7, 15, 21, 24, 28],
        borderColor: '#7f00ff',
        borderWidth: 3,
        pointBackgroundColor: '#00f2fe',
        tension: 0.4,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(127, 0, 255, 0.25)');
          gradient.addColorStop(1, 'rgba(127, 0, 255, 0)');
          return gradient;
        }
      }
    ]
  };

  const timeChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.02)' }, ticks: { color: '#9ca3af' } },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.02)' },
        ticks: {
          color: '#9ca3af',
          callback: (value) => `+${value}%`
        }
      }
    }
  };

  // Helper to render modal category details
  const renderModalCategoryContent = () => {
    let platformsList = [];
    if (modalActiveTab === 'takeout') {
      platformsList = [
        { name: '美团外卖', avgDiff: '¥8.5', rate: '18%', days: '16天', risk: 'high', riskLabel: '高风险', logo: '美', class: 'meituan', color: '#ff4d4d', bgColor: '#ffd000', textColor: '#333' },
        { name: '饿了么', avgDiff: '¥5.2', rate: '12%', days: '10天', risk: 'medium', riskLabel: '中风险', logo: '饿', class: 'eleme', color: '#ff9f43', bgColor: '#008bf8', textColor: '#fff' },
        { name: '抖音外卖', avgDiff: '¥3.1', rate: '7%', days: '5天', risk: 'low', riskLabel: '低风险', logo: '抖', class: 'douyin', color: '#2ecc71', bgColor: '#2f1b2f', textColor: '#fff' },
        { name: '闪送', avgDiff: '¥1.5', rate: '3%', days: '1天', risk: 'low', riskLabel: '低风险', logo: '闪', class: 'shansong', color: '#2ecc71', bgColor: '#2ecc71', textColor: '#fff' }
      ];
    } else if (modalActiveTab === 'shopping') {
      platformsList = [
        { name: '淘宝网', avgDiff: '¥186', rate: '15%', days: '12天', risk: 'medium', riskLabel: '中风险', logo: '淘', class: 'taobao', color: '#ff9f43', bgColor: '#ff5000', textColor: '#fff' },
        { name: '京东', avgDiff: '¥245', rate: '18%', days: '15天', risk: 'high', riskLabel: '高风险', logo: '东', class: 'jd', color: '#ff4d4d', bgColor: '#ff1e32', textColor: '#fff' },
        { name: '苏宁易购', avgDiff: '¥92', rate: '9%', days: '6天', risk: 'low', riskLabel: '低风险', logo: '苏', class: 'suning', color: '#2ecc71', bgColor: '#ffd000', textColor: '#333' },
        { name: '拼多多', avgDiff: '¥12', rate: '2%', days: '1天', risk: 'low', riskLabel: '低风险', logo: '拼', class: 'pinduoduo', color: '#2ecc71', bgColor: '#e02e24', textColor: '#fff' }
      ];
    } else if (modalActiveTab === 'taxi') {
      platformsList = [
        { name: '滴滴出行', avgDiff: '¥14.8', rate: '24%', days: '22天', risk: 'high', riskLabel: '高风险', logo: '滴', class: 'didi', color: '#ff4d4d', bgColor: '#ff8300', textColor: '#fff' },
        { name: '高德打车', avgDiff: '¥9.2', rate: '16%', days: '14天', risk: 'medium', riskLabel: '中风险', logo: '高', class: 'amap', color: '#ff9f43', bgColor: '#0055ff', textColor: '#fff' },
        { name: 'T3出行', avgDiff: '¥6.5', rate: '11%', days: '8天', risk: 'medium', riskLabel: '中风险', logo: '３', class: 't3', color: '#ff9f43', bgColor: '#ff4e00', textColor: '#fff' },
        { name: '曹操出行', avgDiff: '¥4.2', rate: '8%', days: '4天', risk: 'low', riskLabel: '低风险', logo: '曹', class: 'caocao', color: '#2ecc71', bgColor: '#00b74f', textColor: '#fff' }
      ];
    } else { // travel
      platformsList = [
        { name: '飞猪旅行', avgDiff: '¥341', rate: '28%', days: '18天', risk: 'high', riskLabel: '高风险', logo: '飞', class: 'fliggy', color: '#ff4d4d', bgColor: '#ffd800', textColor: '#333' },
        { name: '携程旅行', avgDiff: '¥216', rate: '19%', days: '12天', risk: 'medium', riskLabel: '中风险', logo: '携', class: 'ctrip', color: '#ff9f43', bgColor: '#0086f6', textColor: '#fff' },
        { name: '同程旅行', avgDiff: '¥128', rate: '11%', days: '6天', risk: 'low', riskLabel: '低风险', logo: '同', class: 'tongcheng', color: '#2ecc71', bgColor: '#7f00ff', textColor: '#fff' },
        { name: '去哪儿旅行', avgDiff: '¥56', rate: '5%', days: '3天', risk: 'low', riskLabel: '低风险', logo: '去', class: 'qunar', color: '#2ecc71', bgColor: '#0086f6', textColor: '#fff' }
      ];
    }

    return (
      <div style={{ animation: 'fade-in 0.3s ease' }}>
        <div className="platform-comparison-table-wrapper" style={{ background: 'rgba(255, 255, 255, 0.01)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '8px' }}>
          <table className="platform-table">
            <thead>
              <tr>
                <th>平台</th>
                <th>平均差价</th>
                <th>平均差价率</th>
                <th>异常加价天数</th>
                <th>风险评级</th>
              </tr>
            </thead>
            <tbody>
              {platformsList.map((plat, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="platform-table-name-col">
                      <div 
                        className={`platform-logo-img ${plat.class}`}
                        style={{ background: plat.bgColor, color: plat.textColor }}
                      >
                        {plat.logo}
                      </div>
                      <span>{plat.name}</span>
                    </div>
                  </td>
                  <td style={{ color: plat.risk === 'high' ? '#ff4d4d' : plat.risk === 'medium' ? '#ff9f43' : '#2ecc71', fontWeight: '600' }}>
                    {plat.avgDiff}
                  </td>
                  <td>{plat.rate}</td>
                  <td>{plat.days}</td>
                  <td>
                    <span className={`platform-risk-badge ${plat.risk}`}>
                      {plat.riskLabel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div style={{ animation: 'fade-in 0.4s ease' }}>
      {/* Sub Tabs Navigation */}
      <div className="analysis-subnav">
        {[
          { id: 'trend', label: '价格趋势' },
          { id: 'product', label: '商品对比' },
          { id: 'demographic', label: '用户群体对比' },
          { id: 'time', label: '时间分析' },
          { id: 'distribution', label: '价格分布' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`analysis-subnav-btn ${subTab === tab.id ? 'active' : ''}`}
            onClick={() => setSubTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conditionally Render Content Blocks */}
      {subTab === 'trend' && (
        <div className="grid-analysis-top" style={{ animation: 'fade-in 0.3s ease' }}>
          {/* Chart Card */}
          <div className="glass-panel trend-card">
            <div className="card-title">
              <span>价格趋势分析 ⓘ <span style={{ fontSize: '11px', fontWeight: 'normal', color: '#9ca3af', marginLeft: '6px' }}>（数据与首页完美同步对齐）</span></span>
              <div className="chart-header-actions" style={{ gap: '12px', flexWrap: 'wrap' }}>
                <div className="product-selector-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    style={{
                      background: 'rgba(10, 16, 30, 0.6)',
                      color: '#00f2fe',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      padding: '3px 20px 3px 6px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '600',
                      outline: 'none',
                      cursor: 'pointer',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2300f2fe' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 4px center',
                      backgroundSize: '12px'
                    }}
                  >
                    <option value="机票" style={{ background: '#0b0f19', color: '#fff' }}>机票航线 (北京-上海)</option>
                    <option value="酒店" style={{ background: '#0b0f19', color: '#fff' }}>酒店住宿 (西湖大酒店)</option>
                    <option value="手机" style={{ background: '#0b0f19', color: '#fff' }}>数码电子 (iPhone 15 Pro)</option>
                    <option value="外卖" style={{ background: '#0b0f19', color: '#fff' }}>外卖餐饮 (家庭特惠套餐)</option>
                  </select>
                </div>
                
                {/* Period select */}
                <div className="time-tabs" style={{ background: 'rgba(255,255,255,0.03)', padding: '2px', borderRadius: '6px' }}>
                  {['7天', '30天', '90天', '1年'].map(p => (
                    <div
                      key={p}
                      className={`time-tab ${period === p ? 'active' : ''}`}
                      onClick={() => setPeriod(p)}
                      style={{ fontSize: '10px', padding: '3px 8px' }}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="chart-wrapper" style={{ minHeight: '260px' }}>
              <Line data={trendChartData} options={trendChartOptions} />
            </div>

            <div className="stats-inline-grid">
              <div className="inline-stat-item">
                <span className="inline-stat-lbl">平均差价</span>
                <span className="inline-stat-val">
                  {selectedProduct === '手机' ? '¥899' : selectedProduct === '机票' ? '¥234' : selectedProduct === '酒店' ? '¥100' : '¥37'}
                </span>
                <span className="inline-stat-sub">
                  较上月 <span className="up" style={{ color: '#ff4d4d' }}>↑ 18.6%</span>
                </span>
              </div>
              <div className="inline-stat-item">
                <span className="inline-stat-lbl">最高差价</span>
                <span className="inline-stat-val">
                  {selectedProduct === '手机' ? '¥900' : selectedProduct === '机票' ? '¥330' : selectedProduct === '酒店' ? '¥200' : '¥37'}
                </span>
                <span className="inline-stat-sub">发生在最近一周</span>
              </div>
              <div className="inline-stat-item">
                <span className="inline-stat-lbl">出现高价天数</span>
                <span className="inline-stat-val">12 天</span>
                <span className="inline-stat-sub">占比 53.3%</span>
              </div>
              <div className="inline-stat-item">
                <span className="inline-stat-lbl">平均差价率</span>
                <span className="inline-stat-val">
                  {selectedProduct === '手机' ? '15%' : selectedProduct === '机票' ? '23%' : selectedProduct === '酒店' ? '18%' : '77%'}
                </span>
                <span className="inline-stat-sub">
                  较上月 <span className="up" style={{ color: '#ff4d4d' }}>↑ 6.2%</span>
                </span>
              </div>
            </div>
          </div>

          {/* Conclusions panel */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="card-title">关键分析结论 ⓘ</h3>
            <div className="conclusion-panels">
              <div className="conclusion-panel">
                <div className="conclusion-panel-header">
                  <span className="conclusion-panel-title">价格差异显著</span>
                  <div className="conclusion-panel-icon green">
                    <CheckCircle size={14} />
                  </div>
                </div>
                <p className="conclusion-panel-desc">检测到你在多个平台存在显著的价格差异</p>
                <div className="conclusion-panel-bigval">
                  {selectedProduct === '手机' ? '15%' : selectedProduct === '机票' ? '23%' : selectedProduct === '酒店' ? '18%' : '77%'} <span>最高差异率</span>
                </div>
              </div>

              <div className="conclusion-panel">
                <div className="conclusion-panel-header">
                  <span className="conclusion-panel-title">高风险时段</span>
                  <div className="conclusion-panel-icon orange">
                    <Clock size={14} />
                  </div>
                </div>
                <p className="conclusion-panel-desc">夜间时段的价格加价明显高于白天时段</p>
                <div className="conclusion-panel-bigval" style={{ fontSize: '18px' }}>
                  22:00 - 02:00
                  <span style={{ display: 'block', fontSize: '11px', color: '#ff4d4d', marginTop: '2px' }}>差异率高达 28%</span>
                </div>
              </div>

              <div className="conclusion-panel">
                <div className="conclusion-panel-header">
                  <span className="conclusion-panel-title">受影响平台</span>
                  <div className="conclusion-panel-icon purple">
                    <Shield size={14} />
                  </div>
                </div>
                <p className="conclusion-panel-desc">在多个主流消费平台中检测到严重的杀熟行为</p>
                <div className="conclusion-panel-bigval">
                  3/4 <span>受影响平台</span>
                </div>
              </div>

              <div className="conclusion-panel">
                <div className="conclusion-panel-header">
                  <span className="conclusion-panel-title">预计额外支出</span>
                  <div className="conclusion-panel-icon blue">
                    <DollarSign size={14} />
                  </div>
                </div>
                <p className="conclusion-panel-desc">因价格歧视导致的被宰溢价累计估算</p>
                <div className="conclusion-panel-bigval">
                  {selectedProduct === '手机' ? '¥900' : selectedProduct === '机票' ? '¥234' : selectedProduct === '酒店' ? '¥100' : '¥37'} <span>本单溢价损失</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {subTab === 'product' && (
        <div className="glass-panel" style={{ padding: '24px', animation: 'fade-in 0.3s ease', marginBottom: '24px' }}>
          <h3 className="card-title">🔍 跨平台热门商品横向比价看板 ⓘ</h3>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px', marginBottom: '24px' }}>
            根据云端数据库的匿名回传，以下为同款商品/服务在各大消费渠道的溢价极差：
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Item 1 */}
            <div style={{ background: 'rgba(255, 255, 255, 0.01)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', color: '#00f2fe', fontSize: '14px' }}>✈️ 机票航空：北京 - 上海 (单程单人)</span>
                <span style={{ fontSize: '12px', color: '#ff4d4d', fontWeight: '600', padding: '4px 8px', background: 'rgba(255,77,77,0.1)', borderRadius: '4px' }}>最大差价: ¥234 (18%)</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '80px', fontSize: '12px', color: '#9ca3af' }}>飞猪 (购买):</span>
                  <div style={{ flexGrow: 1, height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: '#ff4d4d', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ width: '60px', fontSize: '12px', fontWeight: 'bold', color: '#ff4d4d', textAlign: 'right' }}>¥1,246</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '80px', fontSize: '12px', color: '#9ca3af' }}>携程旅行:</span>
                  <div style={{ flexGrow: 1, height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '86%', height: '100%', background: '#ff9f43', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ width: '60px', fontSize: '12px', color: '#fff', textAlign: 'right' }}>¥1,080</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '80px', fontSize: '12px', color: '#9ca3af' }}>同程旅行:</span>
                  <div style={{ flexGrow: 1, height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '81%', height: '100%', background: '#2ecc71', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ width: '60px', fontSize: '12px', color: '#2ecc71', textAlign: 'right' }}>¥1,012</span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div style={{ background: 'rgba(255, 255, 255, 0.01)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', color: '#00f2fe', fontSize: '14px' }}>📱 智能终端：iPhone 15 Pro (256GB)</span>
                <span style={{ fontSize: '12px', color: '#ff4d4d', fontWeight: '600', padding: '4px 8px', background: 'rgba(255,77,77,0.1)', borderRadius: '4px' }}>最大差价: ¥900 (15%)</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '80px', fontSize: '12px', color: '#9ca3af' }}>淘宝网 (购买):</span>
                  <div style={{ flexGrow: 1, height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: '#ff4d4d', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ width: '60px', fontSize: '12px', fontWeight: 'bold', color: '#ff4d4d', textAlign: 'right' }}>¥6,899</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '80px', fontSize: '12px', color: '#9ca3af' }}>京东商城:</span>
                  <div style={{ flexGrow: 1, height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '92%', height: '100%', background: '#ff9f43', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ width: '60px', fontSize: '12px', color: '#fff', textAlign: 'right' }}>¥6,350</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '80px', fontSize: '12px', color: '#9ca3af' }}>拼多多:</span>
                  <div style={{ flexGrow: 1, height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '87%', height: '100%', background: '#2ecc71', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ width: '60px', fontSize: '12px', color: '#2ecc71', textAlign: 'right' }}>¥5,999</span>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div style={{ background: 'rgba(255, 255, 255, 0.01)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', color: '#00f2fe', fontSize: '14px' }}>🏨 奢华住宿：西湖大酒店 (豪华湖景房)</span>
                <span style={{ fontSize: '12px', color: '#ff4d4d', fontWeight: '600', padding: '4px 8px', background: 'rgba(255,77,77,0.1)', borderRadius: '4px' }}>最大差价: ¥100 (18%)</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '80px', fontSize: '12px', color: '#9ca3af' }}>携程旅行 (购买):</span>
                  <div style={{ flexGrow: 1, height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: '#ff4d4d', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ width: '60px', fontSize: '12px', fontWeight: 'bold', color: '#ff4d4d', textAlign: 'right' }}>¥658</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '80px', fontSize: '12px', color: '#9ca3af' }}>美团酒店:</span>
                  <div style={{ flexGrow: 1, height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '90%', height: '100%', background: '#ff9f43', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ width: '60px', fontSize: '12px', color: '#fff', textAlign: 'right' }}>¥595</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '80px', fontSize: '12px', color: '#9ca3af' }}>同程旅行:</span>
                  <div style={{ flexGrow: 1, height: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', background: '#2ecc71', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ width: '60px', fontSize: '12px', color: '#2ecc71', textAlign: 'right' }}>¥558</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {subTab === 'demographic' && (
        <div className="glass-panel" style={{ padding: '24px', animation: 'fade-in 0.3s ease', marginBottom: '24px' }}>
          <h3 className="card-title">👥 用户群体画像溢价判定 ⓘ</h3>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px', marginBottom: '24px' }}>
            大数据定价算法会智能扫描您客户端硬件设备与历史消费能力标记，越是高净值群体更容易被动态溢价：
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(255,77,77,0.03)', border: '1px solid rgba(255,77,77,0.15)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#ff4d4d' }}>iOS 高忠诚老用户</span>
                <span style={{ fontSize: '10px', background: '#ff4d4d', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>高危 🔴</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#ff4d4d', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                +24.8% <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal' }}>平均偏离</span>
              </div>
              <p style={{ fontSize: '11px', color: '#9ca3af', lineHeight: '1.4', margin: 0 }}>
                高净值系统（苹果设备）及高回访消费习惯易触发最大浮动溢价上限。
              </p>
            </div>

            <div style={{ background: 'rgba(255,159,67,0.03)', border: '1px solid rgba(255,159,67,0.15)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#ff9f43' }}>Android 活跃老用户</span>
                <span style={{ fontSize: '10px', background: '#ff9f43', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>中危 🟡</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#ff9f43', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                +12.5% <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal' }}>平均偏离</span>
              </div>
              <p style={{ fontSize: '11px', color: '#9ca3af', lineHeight: '1.4', margin: 0 }}>
                较少受到设备因子加权，但因账户高活跃状态与刚需特点仍有明显加价。
              </p>
            </div>

            <div style={{ background: 'rgba(46,204,113,0.03)', border: '1px solid rgba(46,204,113,0.15)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#2ecc71' }}>新激活/访客账户</span>
                <span style={{ fontSize: '10px', background: '#2ecc71', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>安全 🟢</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: '#2ecc71', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                -8.2% <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal' }}>平台补贴</span>
              </div>
              <p style={{ fontSize: '11px', color: '#9ca3af', lineHeight: '1.4', margin: 0 }}>
                由于平台拉新抢占市场，一般会对其发放专属大额新人礼券，价格远低于均价。
              </p>
            </div>
          </div>
        </div>
      )}

      {subTab === 'time' && (
        <div className="glass-panel" style={{ padding: '24px', animation: 'fade-in 0.3s ease', marginBottom: '24px' }}>
          <h3 className="card-title">⏰ 24小时段溢价敏感度分析 ⓘ</h3>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px', marginBottom: '24px' }}>
            分析表明，在深夜出行困难时段或工作日午餐刚需高峰，杀熟溢价几率会翻倍增加：
          </p>
          <div className="chart-wrapper" style={{ minHeight: '280px' }}>
            <Line data={timeChartData} options={timeChartOptions} />
          </div>
          <div style={{ marginTop: '16px', background: 'rgba(127, 0, 255, 0.05)', border: '1px solid rgba(127, 0, 255, 0.15)', padding: '12px', borderRadius: '8px', fontSize: '11px', color: '#a78bfa', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Clock size={16} /> <b>深度洞察：</b> 每日夜间 22:00 - 02:00 是大数据杀熟加价重灾区，主要由于夜间外部交通与服务替代少，用户心理溢价承受度极高。
          </div>
        </div>
      )}

      {subTab === 'distribution' && (
        <div className="glass-panel" style={{ padding: '24px', animation: 'fade-in 0.3s ease', marginBottom: '24px' }}>
          <h3 className="card-title">📊 价格偏离度区间分布分析 ⓘ</h3>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px', marginBottom: '24px' }}>
            调整滑块可以交互式设定“被宰价格歧视”的警报判定阈值，观察全网监控数据切片的实时变动：
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'center' }}>
            <div className="distribution-content" style={{ justifyContent: 'center' }}>
              <div className="donut-chart-wrapper" style={{ width: '180px', height: '180px', position: 'relative' }}>
                <Doughnut data={donutData} options={donutOptions} />
                <div className="donut-center-text">
                  <div className="donut-center-lbl">总监控样本</div>
                  <div className="donut-center-val">1,248</div>
                  <div className="donut-center-sub">件</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px' }}>
                  <span style={{ color: '#fff', fontWeight: '500' }}>⚠️ 价格异常判定阈值:</span>
                  <span style={{ color: '#00f2fe', fontWeight: 'bold' }}>{threshold}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  value={threshold}
                  onChange={(e) => setThreshold(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#00f2fe',
                    cursor: 'pointer',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    height: '6px',
                    outline: 'none'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#6b7280', marginTop: '6px' }}>
                  <span>2% (极度严格)</span>
                  <span>25% (极度宽松)</span>
                </div>
              </div>

              <div className="distribution-legend-list" style={{ flexGrow: 1 }}>
                <div className="dist-legend-item">
                  <div className="dist-legend-label">
                    <span className="dist-dot red"></span>
                    <span>{dynamicDonut.labels[0]}</span>
                  </div>
                  <span className="dist-legend-qty">{dynamicDonut.data[0]} 件</span>
                  <span className="dist-legend-pct red">{dynamicDonut.pcts[0]}%</span>
                </div>
                <div className="dist-legend-item">
                  <div className="dist-legend-label">
                    <span className="dist-dot orange"></span>
                    <span>{dynamicDonut.labels[1]}</span>
                  </div>
                  <span className="dist-legend-qty">{dynamicDonut.data[1]} 件</span>
                  <span className="dist-legend-pct orange">{dynamicDonut.pcts[1]}%</span>
                </div>
                <div className="dist-legend-item">
                  <div className="dist-legend-label">
                    <span className="dist-dot blue"></span>
                    <span>{dynamicDonut.labels[2]}</span>
                  </div>
                  <span className="dist-legend-qty">{dynamicDonut.data[2]} 件</span>
                  <span className="dist-legend-pct blue">{dynamicDonut.pcts[2]}%</span>
                </div>
                <div className="dist-legend-item">
                  <div className="dist-legend-label">
                    <span className="dist-dot green"></span>
                    <span>{dynamicDonut.labels[3]}</span>
                  </div>
                  <span className="dist-legend-qty">{dynamicDonut.data[3]} 件</span>
                  <span className="dist-legend-pct green">{dynamicDonut.pcts[3]}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Renders unified bottom components only on default 'trend' tab */}
      {subTab === 'trend' && (
        <div className="grid-analysis-bottom">
          {/* Table comparison */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="card-title">平台价格对比 ⓘ</h3>
            <div className="platform-comparison-table-wrapper">
              <table className="platform-table">
                <thead>
                  <tr>
                    <th>平台</th>
                    <th>平均差价</th>
                    <th>差价率</th>
                    <th>高价天数</th>
                    <th>风险等级</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="platform-table-name-col">
                        <div className="platform-logo-img fliggy">飞</div>
                        <span>飞猪旅行</span>
                      </div>
                    </td>
                    <td style={{ color: '#ff4d4d', fontWeight: '500' }}>¥341</td>
                    <td>28%</td>
                    <td>18天</td>
                    <td>
                      <span className="platform-risk-badge high">高风险</span>
                    </td>
                    <td>
                      <button className="platform-table-action-btn" onClick={() => setSubTab('product')}>
                        <TrendingUp size={12} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="platform-table-name-col">
                        <div className="platform-logo-img ctrip">携</div>
                        <span>携程旅行</span>
                      </div>
                    </td>
                    <td style={{ color: '#ff9f43', fontWeight: '500' }}>¥216</td>
                    <td>19%</td>
                    <td>12天</td>
                    <td>
                      <span className="platform-risk-badge medium">中风险</span>
                    </td>
                    <td>
                      <button className="platform-table-action-btn" onClick={() => setSubTab('product')}>
                        <TrendingUp size={12} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="platform-table-name-col">
                        <div className="platform-logo-img tongcheng" style={{ background: '#7f00ff' }}>同</div>
                        <span>同程旅行</span>
                      </div>
                    </td>
                    <td style={{ color: '#2ecc71', fontWeight: '500' }}>¥128</td>
                    <td>11%</td>
                    <td>6天</td>
                    <td>
                      <span className="platform-risk-badge low">低风险</span>
                    </td>
                    <td>
                      <button className="platform-table-action-btn" onClick={() => setSubTab('product')}>
                        <TrendingUp size={12} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="platform-table-name-col">
                        <div className="platform-logo-img ctrip" style={{ background: '#0086f6', color: '#fff' }}>去</div>
                        <span>去哪儿旅行</span>
                      </div>
                    </td>
                    <td style={{ color: '#2ecc71', fontWeight: '500' }}>¥56</td>
                    <td>5%</td>
                    <td>3天</td>
                    <td>
                      <span className="platform-risk-badge low">低风险</span>
                    </td>
                    <td>
                      <button className="platform-table-action-btn" onClick={() => setSubTab('product')}>
                        <TrendingUp size={12} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Clickable view all platforms link opening category modal! */}
            <div className="table-footer-link" style={{ marginTop: '16px' }}>
              <button 
                onClick={() => setShowAllPlatformsModal(true)} 
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#00f2fe',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  outline: 'none',
                  padding: 0,
                  transition: 'text-shadow 0.2s'
                }}
                onMouseOver={(e) => e.target.style.textShadow = '0 0 8px rgba(0,242,254,0.6)'}
                onMouseOut={(e) => e.target.style.textShadow = 'none'}
              >
                查看全部平台 <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Spark price distribution card */}
          <div className="glass-panel distribution-card">
            <h3 className="card-title">
              价格分布区间 ⓘ
              <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 'normal', cursor: 'pointer' }} onClick={() => setSubTab('distribution')}>
                详细分析 <ChevronRight size={12} />
              </span>
            </h3>
            <div className="distribution-content">
              <div className="donut-chart-wrapper" style={{ width: '130px', height: '130px', position: 'relative' }}>
                <Doughnut data={donutData} options={donutOptions} />
                <div className="donut-center-text">
                  <div className="donut-center-lbl">监控样本</div>
                  <div className="donut-center-val" style={{ fontSize: '16px' }}>1,248</div>
                  <div className="donut-center-sub" style={{ fontSize: '9px' }}>件</div>
                </div>
              </div>
              <div className="distribution-legend-list" style={{ gap: '6px' }}>
                <div className="dist-legend-item" style={{ fontSize: '11px' }}>
                  <div className="dist-legend-label">
                    <span className="dist-dot red"></span>
                    <span>偏高 (&gt;20%)</span>
                  </div>
                  <span className="dist-legend-qty">{dynamicDonut.data[0]} 件</span>
                </div>
                <div className="dist-legend-item" style={{ fontSize: '11px' }}>
                  <div className="dist-legend-label">
                    <span className="dist-dot orange"></span>
                    <span>略高 (10%~20%)</span>
                  </div>
                  <span className="dist-legend-qty">{dynamicDonut.data[1]} 件</span>
                </div>
                <div className="dist-legend-item" style={{ fontSize: '11px' }}>
                  <div className="dist-legend-label">
                    <span className="dist-dot blue"></span>
                    <span>正常 (-10%~10%)</span>
                  </div>
                  <span className="dist-legend-qty">{dynamicDonut.data[2]} 件</span>
                </div>
              </div>
            </div>
            <div className="dist-threshold-lbl" style={{ cursor: 'pointer', padding: '6px 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '8px' }} onClick={() => setSubTab('distribution')}>
              当前过滤警报阈值: <span style={{ color: '#00f2fe', fontWeight: 'bold' }}>{threshold}% ✎</span>
            </div>
          </div>
        </div>
      )}

      {/* View All Platforms Custom Category Modal */}
      {showAllPlatformsModal && (
        <div className="modal-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(6, 10, 20, 0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 2000,
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 40px',
          boxSizing: 'border-box',
          animation: 'fade-in 0.3s ease',
          overflowY: 'auto'
        }}>
          {/* Modal Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px', marginBottom: '24px' }}>
            <button 
              onClick={() => setShowAllPlatformsModal(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '8px 16px',
                borderRadius: '8px',
                color: '#9ca3af',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#00f2fe';
                e.currentTarget.style.color = '#00f2fe';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = '#9ca3af';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ChevronLeft size={16} /> 返回
            </button>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <Shield size={20} style={{ color: '#00f2fe' }} /> 全平台价格歧视对比监测大屏
            </h2>
            <div style={{ width: '80px' }}></div>
          </div>

          {/* Category Selection Tabs */}
          <div className="modal-tabs" style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '32px' }}>
            {[
              { id: 'takeout', label: '外卖平台' },
              { id: 'shopping', label: '购物平台' },
              { id: 'taxi', label: '打车平台' },
              { id: 'travel', label: '旅游/出行平台' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setModalActiveTab(tab.id)}
                style={{
                  background: modalActiveTab === tab.id ? 'rgba(0, 242, 254, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${modalActiveTab === tab.id ? '#00f2fe' : 'rgba(255, 255, 255, 0.08)'}`,
                  padding: '10px 24px',
                  borderRadius: '8px',
                  color: modalActiveTab === tab.id ? '#00f2fe' : '#9ca3af',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxShadow: modalActiveTab === tab.id ? '0 0 15px rgba(0, 242, 254, 0.15)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Modal Content - Category View Switch */}
          <div style={{ flexGrow: 1, maxWidth: '1000px', width: '100%', margin: '0 auto', paddingBottom: '40px' }}>
            {renderModalCategoryContent()}
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 3. DIAGNOSTIC REPORT VIEW (检测报告与账单上传)
// -------------------------------------------------------------
const PRESETS = [
  {
    id: 'fliggy',
    platform: '飞猪旅行',
    category: '机票预订',
    desc: '北京飞上海单程机票订单（老用户+iPhone 15机型）',
    price: '¥1,246',
    normalPrice: '¥1,012',
    member: '白金会员',
    device: 'iOS (iPhone 15 Pro)',
    time: '深夜 23:15',
    riskScore: 88,
    descList: [
      '由于使用高价值 iOS 机型（iPhone 15 Pro），触发算法加权因子。',
      '检测到您近 30 天内高频次搜索该航线，算法判定该订单紧急度极高。',
      '在深夜时段 23:15 下单，触发“急迫购买”溢价规则。'
    ]
  },
  {
    id: 'taobao',
    platform: '淘宝网',
    category: '手机数码',
    desc: 'iPhone 15 256GB 黑色购买账单（高消费等级+iOS系统）',
    price: '¥6,899',
    normalPrice: '¥5,999',
    member: '88VIP 高级会员',
    device: 'iOS (iPad Pro)',
    time: '工作日 14:20',
    riskScore: 75,
    descList: [
      '检测到您拥有 88VIP 标记，高消费能力画像使用户遭遇大额差价定价。',
      '老用户高忠诚度识别，未向您派发面向新用户的优惠折价券 ¥900。'
    ]
  },
  {
    id: 'ctrip',
    platform: '携程网',
    category: '酒店定金',
    desc: '西湖大酒店豪华湖景房套房账单（高回访老用户订单）',
    price: '¥658',
    normalPrice: '¥558',
    member: '钻石尊贵会员',
    device: 'iOS (iPhone 13 Pro)',
    time: '周日 19:30',
    riskScore: 82,
    descList: [
      '由于您是五星尊贵会员，被判定为“高心理价格承受力”用户。',
      '周边热门地标高人流量定价，老用户溢价 ¥100。'
    ]
  },
  {
    id: 'meituan',
    platform: '美团外卖',
    category: '外卖餐饮',
    desc: '周末外卖全家桶家庭套餐账单（Android机型+新注册号）',
    price: '¥48',
    normalPrice: '¥56',
    member: '普通新注册账号',
    device: 'Android (小米 13)',
    time: '周日 12:10',
    riskScore: 24,
    descList: [
      '未检测到大数据杀熟溢价。',
      '因新用户专享券和Android防杀熟伪装，享受了新客超值立减，价格偏低。'
    ]
  }
];

function ReportView() {
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanLogs, setScanLogs] = useState([]);
  const [reportResult, setReportResult] = useState(null);
  const [letterCopied, setLetterCopied] = useState(false);

  const logsRef = useRef(null);

  useEffect(() => {
    if (logsRef.current) {
      logsRef.current.scrollTop = logsRef.current.scrollHeight;
    }
  }, [scanLogs]);

  const handleStartScan = () => {
    setScanning(true);
    setReportResult(null);
    setScanStep(0);
    setScanLogs([]);

    const logTemplates = [
      { text: '> [INFO] 初始化 PriceShield 智能深度检测模块 v2.4...', delay: 200, type: 'info' },
      { text: `> [INFO] 成功导入 [${selectedPreset.platform}] 交易账单结构数据...`, delay: 600, type: 'info' },
      { text: `> [SUCCESS] 提取特征完成：交易时间 [${selectedPreset.time}]，实付金额 [${selectedPreset.price}]`, delay: 1000, type: 'success' },
      { text: `> [WARNING] 扫描用户客户端指纹：设备类型为 [${selectedPreset.device}]`, delay: 1400, type: 'warning' },
      { text: `> [WARNING] 提取用户资产画像：会员特征 [${selectedPreset.member}]，属高净值用户群体`, delay: 1800, type: 'warning' },
      { text: `> [INFO] 正在向 PriceShield 广域大数据共享池发送定价反查检索...`, delay: 2200, type: 'info' },
      { text: `> [INFO] 正在抓取不同设备型、不同新老注册账号在同一网段下的对比定价模型...`, delay: 2600, type: 'info' },
      { text: `> [SUCCESS] 定价回溯池抓取完成！分析到同源商品在纯白新用户下报价为: ${selectedPreset.normalPrice}`, delay: 3000, type: 'success' },
      { text: `> [DANGER] 诊断警报：检测到定价偏差系数显著！差价高达: ${parseInt(selectedPreset.price.replace('¥', '')) - parseInt(selectedPreset.normalPrice.replace('¥', ''))} 元。`, delay: 3400, type: 'danger' },
      { text: '> [SUCCESS] 深度算法歧视检测生成报告完毕！', delay: 3800, type: 'success' }
    ];

    logTemplates.forEach((log) => {
      setTimeout(() => {
        setScanLogs((prev) => [...prev, log]);
        setScanStep((prev) => prev + 1);
        if (log.text.includes('检测报告完毕')) {
          setTimeout(() => {
            setScanning(false);
            setReportResult(selectedPreset);
          }, 400);
        }
      }, log.delay);
    });
  };

  const handleCopyLetter = (letterText) => {
    navigator.clipboard.writeText(letterText);
    setLetterCopied(true);
    setTimeout(() => setLetterCopied(false), 2000);
  };

  const generateComplaintLetter = (res) => {
    const gap = parseInt(res.price.replace('¥', '')) - parseInt(res.normalPrice.replace('¥', ''));
    return `关于在【${res.platform}】遭遇大数据杀熟及价格歧视的申诉信

全国消费者协会/市场监督管理局：

申诉人于近期在【${res.platform}】购买商品/服务【${res.desc}】，实付交易金额为 ${res.price} 元。

经第三方平台 PriceShield 智慧消费检测引擎对平台算法定价模型的脱敏反查比对，该笔交易的全国市场标准公允基准价（新注册号/安卓标准定价）应为 ${res.normalPrice} 元。商家对我方施加的溢价偏差金额高达 ${gap} 元，算法溢价率达 ${((gap / parseInt(res.normalPrice.replace('¥', ''))) * 100).toFixed(1)}%。

检测结果分析表明，该歧视性差价系由以下平台算法因子诱导形成：
1. 设备指纹溢价（使用的是高消费特征机型：${res.device}）
2. 历史浏览频度溢价及时间段限制（下单时间：${res.time}）
3. 忠诚度大数据杀熟机制（账号类型：${res.member}）

此举已严重违反《消费者权益保护法》中规定的消费者享有公平交易的基本权利，亦违反了《价格法》和《互联网信息服务算法推荐管理规定》中关于禁止通过算法实施价格歧视的明文条例。

为此我方严正要求平台退还由于价格歧视产生的差额 ${gap} 元，并对大数据杀熟算法予以公示和整改！

特此申诉。
申诉人：PriceShield维权用户`;
  };

  return (
    <div style={{ animation: 'fade-in 0.4s ease' }} className="diagnostic-page">
      <div className="glass-panel scanner-box">
        {!scanning && !reportResult && (
          <>
            <div className="upload-dropzone">
              <div className="upload-icon-wrapper">
                <FileText size={24} />
              </div>
              <h4>将您的账单截图或消费文件拖拽至此上传</h4>
              <p>支持 JPG, PNG, PDF, CSV 账单结构化识别</p>
            </div>

            <div className="preset-bill-selector">
              <span className="preset-title">或点击选择系统为您内置的比赛演示账单模板：</span>
              <div className="preset-grid">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    className={`preset-btn ${selectedPreset.id === preset.id ? 'selected' : ''}`}
                    onClick={() => setSelectedPreset(preset)}
                  >
                    <div style={{ color: '#00f2fe' }}>
                      {preset.category.includes('机票') && <Plane size={18} />}
                      {preset.category.includes('数码') && <ShoppingBag size={18} />}
                      {preset.category.includes('酒店') && <Home size={18} />}
                      {preset.category.includes('外卖') && <Compass size={18} />}
                    </div>
                    <div className="preset-info">
                      <span className="preset-name">{preset.platform} - {preset.category}</span>
                      <span className="preset-meta">{preset.desc.substring(0, 24)}...</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button className="scan-trigger-btn" onClick={handleStartScan}>
              <RefreshCw size={16} />
              开始智能反算法扫描诊断
            </button>
          </>
        )}

        {scanning && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="scan-radar-effect">
              <div className="radar-circle radar-circle-pulse-1"></div>
              <div className="radar-circle radar-circle-pulse-2"></div>
              <div className="radar-scanner-sweep"></div>
              <div className="radar-scanner-center">
                <Shield size={42} className="radar-icon-animate" />
              </div>
            </div>

            <div className="scanner-text">
              <h3>PriceShield AI 算法定价反向推演中...</h3>
              <p>正在爬取各大主流应用开放价格池，进行多终端设备、多新老账号定价变量交叉解算...</p>
            </div>

            {/* Simulated terminal */}
            <div className="scan-terminal" ref={logsRef}>
              {scanLogs.map((log, index) => (
                <div key={index} className="terminal-line">
                  {log.text.includes('[SUCCESS]') && <span className="success">{log.text}</span>}
                  {log.text.includes('[WARNING]') && <span className="warning">{log.text}</span>}
                  {log.text.includes('[DANGER]') && <span className="danger">{log.text}</span>}
                  {log.text.includes('[INFO]') && <span className="info">{log.text}</span>}
                </div>
              ))}
            </div>

            <div className="scan-progress-bar-container">
              <div className="scan-progress-labels">
                <span>反编译算法因子比对中</span>
                <span className="scan-progress-pct">{Math.min(Math.round((scanStep / 10) * 100), 100)}%</span>
              </div>
              <div className="progress-bar-bg" style={{ height: '8px' }}>
                <div
                  className="progress-bar-fill blue"
                  style={{ width: `${Math.min(Math.round((scanStep / 10) * 100), 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {reportResult && !scanning && (
          <div className="report-result-panel" style={{ width: '100%', textAlign: 'left' }}>
            <div className="result-card-header">
              <div className="result-card-header-welcome">
                <h3>🔍 算法价格歧视扫描诊断报告</h3>
                <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>诊断平台: {reportResult.platform} | 账单时间: {reportResult.time}</p>
              </div>
              <button
                className="btn-secondary"
                onClick={() => {
                  setReportResult(null);
                }}
              >
                重新检测其他账单
              </button>
            </div>

            <div className="grid-top">
              {/* Score breakdown card */}
              <div className="glass-panel" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>算法杀熟指数</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <div className="gauge-chart-wrapper" style={{ width: '130px', height: '130px' }}>
                    <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                      <circle cx="65" cy="65" r="50" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                      <circle
                        cx="65"
                        cy="65"
                        r="50"
                        fill="transparent"
                        stroke={reportResult.riskScore > 50 ? '#ff4d4d' : '#2ecc71'}
                        strokeWidth="10"
                        strokeDasharray="314.1"
                        strokeDashoffset={314.1 * (1 - reportResult.riskScore / 100)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="gauge-center-text">
                      <div className="gauge-value" style={{ fontSize: '32px' }}>
                        {reportResult.riskScore}
                        <span style={{ fontSize: '12px' }}>/100</span>
                      </div>
                      <div
                        className="gauge-label"
                        style={{
                          fontSize: '11px',
                          color: reportResult.riskScore > 50 ? '#ff4d4d' : '#2ecc71'
                        }}
                      >
                        {reportResult.riskScore > 50 ? '高歧视风险' : '低风险正常'}
                      </div>
                    </div>
                  </div>
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#9ca3af' }}>您的实际交易额:</span>
                      <span style={{ fontWeight: '600', color: '#ff4d4d' }}>{reportResult.price}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#9ca3af' }}>公允基准参考价:</span>
                      <span style={{ fontWeight: '600', color: '#2ecc71' }}>{reportResult.normalPrice}</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justify: 'space-between',
                        fontSize: '13px',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        paddingTop: '8px'
                      }}
                    >
                      <span style={{ color: '#9ca3af' }}>被杀熟溢价偏差:</span>
                      <span style={{ fontWeight: '700', color: '#ff4d4d', fontSize: '15px' }}>
                        +¥{parseInt(reportResult.price.replace('¥', '')) - parseInt(reportResult.normalPrice.replace('¥', ''))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* pricing factors */}
              <div className="glass-panel" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>解构算法歧视因子</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {reportResult.descList.map((descText, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '10px 12px',
                        background: 'rgba(255,255,255,0.01)',
                        border: '1px solid rgba(255,255,255,0.03)',
                        borderRadius: '8px',
                        fontSize: '12px',
                        lineHeight: '1.4',
                        color: '#f3f4f6',
                        display: 'flex',
                        gap: '8px'
                      }}
                    >
                      <span style={{ color: '#00f2fe', fontWeight: '600' }}>#{idx + 1}</span>
                      <span>{descText}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated complaints Letter */}
            <div className="rights-protection-letter-card">
              <div className="letter-header">
                <span>🛡️ 自动生成维权申诉举报信</span>
                <span style={{ fontSize: '11px', color: '#2ecc71', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle size={12} /> 符合《算法推荐管理规定》标准模版
                </span>
              </div>
              <div className="letter-preview-box">
                <pre
                  style={{
                    fontFamily: 'inherit',
                    whiteSpace: 'pre-wrap',
                    color: '#9ca3af',
                    fontSize: '12px'
                  }}
                >
                  {generateComplaintLetter(reportResult)}
                </pre>
              </div>
              <div className="letter-actions-row">
                <button
                  className="btn-secondary"
                  onClick={() => handleCopyLetter(generateComplaintLetter(reportResult))}
                >
                  <Copy size={14} />
                  {letterCopied ? '已复制到剪贴板！' : '一键复制申诉信'}
                </button>
                <button
                  className="btn-primary"
                  onClick={() => alert('比赛演示功能：维权投诉信已成功导出为 PDF 文件！')}
                >
                  <Download size={14} />
                  导出为 PDF 存证
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. AI INSIGHT VIEW (AI洞察 - 算法黑箱模拟器)
// -------------------------------------------------------------
function InsightView() {
  const [loyalty, setLoyalty] = useState(80); // 0-100
  const [device, setDevice] = useState('ios'); // ios, android-high, android-budget
  const [nightMode, setNightMode] = useState(true); // boolean
  const [frequency, setFrequency] = useState(6); // 1-10

  const basePrice = 1000;

  // Real-time Pricing discrimination calculation model
  const calculateSimulatedPrice = () => {
    let multiplier = 1.0;

    // 1. User loyalty factor (Older loyalty active = higher price markup)
    if (loyalty > 30 && loyalty <= 70) {
      multiplier += (loyalty / 100) * 0.15;
    } else if (loyalty > 70) {
      multiplier += (loyalty / 100) * 0.28;
    }

    // 2. Device type factor (iOS gets massive markup, budget android gets zero)
    if (device === 'ios') {
      multiplier += 0.15;
    } else if (device === 'android-high') {
      multiplier += 0.06;
    }

    // 3. Late night mode factor
    if (nightMode) {
      multiplier += 0.12;
    }

    // 4. Search frequency / urgency factor
    if (frequency > 3 && frequency <= 6) {
      multiplier += (frequency / 10) * 0.12;
    } else if (frequency > 6) {
      multiplier += (frequency / 10) * 0.22;
    }

    return Math.round(basePrice * multiplier);
  };

  const simulatedPrice = calculateSimulatedPrice();
  const markupPercentage = Math.round(((simulatedPrice - basePrice) / basePrice) * 100);

  // Status message
  const getSimStatus = () => {
    if (markupPercentage < 15) {
      return {
        class: 'green',
        text: '价格浮动合理：该定价属于平台正常季节性波动，未触发严重的算法价格歧视因子。'
      };
    } else if (markupPercentage >= 15 && markupPercentage < 35) {
      return {
        class: 'orange',
        text: '大数据杀熟警告！检测到中度价格歧视，建议使用无痕模式比价或降低活跃账号搜索频度。'
      };
    } else {
      return {
        class: 'red',
        text: '重度价格歧视预警！该溢价比例已严重侵害您的权益，建议截图留证并向市场监管局申诉！'
      };
    }
  };

  const statusObj = getSimStatus();

  return (
    <div style={{ animation: 'fade-in 0.4s ease' }}>
      <div className="simulator-layout">
        {/* Controls Panel */}
        <div className="glass-panel simulator-controls-panel">
          <h3 className="simulator-controls-title">⚙️ 算法推荐杀熟变量调节器</h3>
          <div className="control-group">
            {/* Control Item 1: Loyalty */}
            <div className="control-item">
              <div className="control-label-row">
                <span className="control-lbl">
                  <User size={14} /> 用户历史活跃度 (画像忠诚度)
                </span>
                <span className={`control-val-badge ${loyalty > 70 ? 'red' : loyalty > 30 ? 'orange' : ''}`}>
                  {loyalty > 70 ? '深度老用户 (高粘性)' : loyalty > 30 ? '普通活跃户' : '纯净新用户'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={loyalty}
                onChange={(e) => setLoyalty(parseInt(e.target.value))}
                className="range-slider"
              />
              <p className="control-desc">算法通过分析您的历史消费频次和在线时长，判定您的粘性。越是老用户，算法认定的流失概率越低，杀熟空间越大。</p>
            </div>

            {/* Control Item 2: Device */}
            <div className="control-item">
              <div className="control-label-row">
                <span className="control-lbl">
                  <Sliders size={14} /> 访问终端机型 (设备指纹)
                </span>
                <span className={`control-val-badge ${device === 'ios' ? 'red' : device === 'android-high' ? 'orange' : ''}`}>
                  {device === 'ios' ? 'iOS (iPhone 16 Pro)' : device === 'android-high' ? '安卓高端旗舰' : '安卓中低端机型'}
                </span>
              </div>
              <div className="options-selector-row">
                <button
                  className={`option-selector-btn ${device === 'ios' ? 'selected' : ''}`}
                  onClick={() => setDevice('ios')}
                >
                  iPhone 16 Pro
                </button>
                <button
                  className={`option-selector-btn ${device === 'android-high' ? 'selected' : ''}`}
                  onClick={() => setDevice('android-high')}
                >
                  安卓中高端机
                </button>
                <button
                  className={`option-selector-btn ${device === 'android-budget' ? 'selected' : ''}`}
                  onClick={() => setDevice('android-budget')}
                >
                  安卓千元机
                </button>
              </div>
              <p className="control-desc">不同机型的市场均价会被平台用于评估用户的财务状况。高端 iOS 机型更易被打上“高购买力”标签以加价。</p>
            </div>

            {/* Control Item 3: Time of day */}
            <div className="control-item">
              <div className="control-label-row">
                <span className="control-lbl">
                  <Clock size={14} /> 深夜时段下单 (需求紧迫度)
                </span>
                <span className={`control-val-badge ${nightMode ? 'red' : ''}`}>
                  {nightMode ? '深夜时段 23:30' : '白天时段 14:00'}
                </span>
              </div>
              <div className="options-selector-row two-cols">
                <button
                  className={`option-selector-btn ${!nightMode ? 'selected' : ''}`}
                  onClick={() => setNightMode(false)}
                >
                  白天下单 (闲暇比价)
                </button>
                <button
                  className={`option-selector-btn ${nightMode ? 'selected' : ''}`}
                  onClick={() => setNightMode(true)}
                >
                  深夜下单 (急迫交易)
                </button>
              </div>
              <p className="control-desc">在深夜 22:00 至次日凌晨 02:00 期间下单，算法推测用户因精神疲惫、没有比价耐性，加价敏感度大幅降低。</p>
            </div>

            {/* Control Item 4: Search frequency */}
            <div className="control-item">
              <div className="control-label-row">
                <span className="control-lbl">
                  <Activity size={14} /> 同一商品搜索频次 (高频比价)
                </span>
                <span className={`control-val-badge ${frequency > 6 ? 'red' : frequency > 3 ? 'orange' : ''}`}>
                  {frequency} 次 (急切购买)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={frequency}
                onChange={(e) => setFrequency(parseInt(e.target.value))}
                className="range-slider"
              />
              <p className="control-desc">30分钟内高频次反复刷新同一航线或房型，算法判定该用户此次出行需求极高，会实施阶梯式递增定价限制交易。</p>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="glass-panel simulator-results-panel">
          <div>
            <h3 className="simulator-controls-title">🔮 算法沙盘实时定价反馈</h3>

            <div className="price-tag-container">
              <div className={`price-tag-glow ${markupPercentage > 35 ? 'red' : ''}`}></div>
              <div className="price-tag-inner">
                <div className="price-tag-lbl">实时模拟平台报价</div>
                <div className={`price-tag-value ${markupPercentage > 35 ? 'red' : markupPercentage >= 15 ? 'orange' : ''}`}>
                  ¥{simulatedPrice}
                </div>
                <div className="price-tag-comparison">
                  <span>标准成本价: ¥{basePrice}</span>
                  <span className={`markup ${markupPercentage > 35 ? 'red' : markupPercentage >= 15 ? 'orange' : 'green'}`}>
                    溢价变动: +{markupPercentage}% ({markupPercentage > 0 ? `+¥${simulatedPrice - basePrice}` : '平价'})
                  </span>
                </div>
              </div>
            </div>

            <div className={`sim-status-banner ${statusObj.class}`}>
              <AlertTriangle size={16} style={{ flexShrink: 0 }} />
              <span>{statusObj.text}</span>
            </div>

            {/* simulated profit margin bar */}
            <div className="sim-margin-box">
              <div className="sim-margin-lbl-row">
                <span>商家算法额外利润空间</span>
                <span className={`num ${markupPercentage > 35 ? 'red' : markupPercentage >= 15 ? 'orange' : ''}`}>
                  {Math.round(((simulatedPrice - basePrice) / simulatedPrice) * 100)}%
                </span>
              </div>
              <div className="sim-margin-bar-container">
                <div
                  className={`sim-margin-bar-fill ${markupPercentage > 35 ? 'red' : markupPercentage >= 15 ? 'orange' : ''}`}
                  style={{ width: `${Math.max(Math.round(((simulatedPrice - basePrice) / simulatedPrice) * 100), 2)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Dynamic bar charts */}
          <div className="sim-chart-card">
            <div className="sim-chart-lbl">定价偏差直观对比</div>
            <div className="sim-chart-stub">
              {/* Bar 1: Base */}
              <div className="sim-chart-bar-wrapper">
                <div className="sim-chart-bar" style={{ height: '70px' }}></div>
                <span className="sim-chart-bar-name">标准均价</span>
              </div>
              {/* Bar 2: Low budget android */}
              <div className="sim-chart-bar-wrapper">
                <div className="sim-chart-bar" style={{ height: '72px' }}></div>
                <span className="sim-chart-bar-name">新户安卓</span>
              </div>
              {/* Bar 3: iOS High-end */}
              <div className="sim-chart-bar-wrapper">
                <div className="sim-chart-bar" style={{ height: '88px' }}></div>
                <span className="sim-chart-bar-name">iPhone用户</span>
              </div>
              {/* Bar 4: Current simulated */}
              <div className="sim-chart-bar-wrapper">
                <div
                  className={`sim-chart-bar current ${markupPercentage > 35 ? 'red' : ''}`}
                  style={{ height: `${Math.min(70 * (simulatedPrice / basePrice), 120)}px` }}
                ></div>
                <span className="sim-chart-bar-name" style={{ color: '#00f2fe', fontWeight: 'bold' }}>当前沙盘</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 5. PLATFORM MONITORING VIEW (平台监控与大屏)
// -------------------------------------------------------------
const INITIAL_FEEDS = [
  { id: 1, platform: '飞猪旅行', item: '上海-三亚机票', gap: '¥310', rate: '24%', info: 'iOS白金会员 vs Android新用户', time: '刚刚' },
  { id: 2, platform: '美团外卖', item: '高档海鲜烧烤', gap: '¥14', rate: '15%', info: '同一网络下不同活跃账号', time: '1分钟前' },
  { id: 3, platform: '携程旅行', item: '三亚亚特兰蒂斯酒店', gap: '¥480', rate: '21%', info: '高星级老用户定位溢价行为', time: '3分钟前' },
  { id: 4, platform: '滴滴出行', item: '晚高峰同一航站楼叫车', gap: '¥9', rate: '18%', info: 'iOS高端设备溢价机制', time: '5分钟前' },
  { id: 5, platform: '淘宝网', item: '进口猫粮三包套餐', gap: '¥45', rate: '12%', info: '老用户高购买力定向加价', time: '8分钟前' }
];

function MonitoringView() {
  const [feeds, setFeeds] = useState(INITIAL_FEEDS);

  useEffect(() => {
    const timer = setInterval(() => {
      const platforms = ['飞猪旅行', '携程旅行', '美团外卖', '滴滴出行', '淘宝网', '同程旅行'];
      const items = ['北京-广州单程机票', '上海迪士尼双人门票', '万豪大酒店行政大床房', '陆家嘴往返外滩打车订单', '戴尔高性能游戏笔记本'];
      const gaps = ['¥120', '¥45', '¥180', '¥8', '¥420'];
      const rates = ['14%', '19%', '23%', '12%', '8%'];
      const infos = ['高粘性iOS会员设备加权', '连续第4次检索加价机制', '老用户高购买力溢价匹配', '夜间急迫出行算法控制'];

      const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      const randomGap = gaps[Math.floor(Math.random() * gaps.length)];
      const randomRate = rates[Math.floor(Math.random() * rates.length)];
      const randomInfo = infos[Math.floor(Math.random() * infos.length)];

      const newFeed = {
        id: Date.now(),
        platform: randomPlatform,
        item: randomItem,
        gap: randomGap,
        rate: randomRate,
        info: randomInfo,
        time: '刚刚'
      };

      setFeeds((prev) => [newFeed, ...prev.slice(0, 4)]);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ animation: 'fade-in 0.4s ease' }}>
      <div className="grid-top">
        {/* Real-time Monitor Card */}
        <div className="glass-panel monitor-feed-panel">
          <h3 className="card-title">
            <span>🔴 广角雷达实时价格歧视事件流 (动态自动刷新)</span>
            <span style={{ fontSize: '11px', color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  background: '#ff4d4d',
                  borderRadius: '50%',
                  animation: 'ping-animate 1.2s infinite'
                }}
              />
              正在搜集全网数据
            </span>
          </h3>

          <div className="monitor-feed-list">
            {feeds.map((feed) => (
              <div key={feed.id} className="monitor-feed-item">
                <div className="monitor-feed-left">
                  <div className="monitor-feed-indicator ping"></div>
                  <div className="monitor-feed-details">
                    <h4>
                      【{feed.platform}】{feed.item} - 检测到价格歧视！
                    </h4>
                    <p>
                      对比指纹: <span className="hl">{feed.info}</span> | 差额比例:{' '}
                      <span className="hl-red">{feed.rate}</span>
                    </p>
                  </div>
                </div>
                <div className="monitor-feed-right">
                  <span className="monitor-feed-time">{feed.time}</span>
                  <div>
                    <span className="monitor-feed-badge">溢价 {feed.gap}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Statistics Card */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 className="card-title">全网算法溢价监测大盘</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px',
                background: 'rgba(255,255,255,0.01)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.03)'
              }}
            >
              <div>
                <span style={{ fontSize: '12px', color: '#9ca3af' }}>全网今日拦截比对交易</span>
                <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#00f2fe', fontFamily: 'var(--font-sans)', marginTop: '4px' }}>
                  24,812<span>次</span>
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '11px', color: '#2ecc71', background: 'rgba(46,204,113,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  监测正常率 76%
                </span>
                <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '10px' }}>覆盖全国 84 个核心城市</p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px',
                background: 'rgba(255,255,255,0.01)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.03)'
              }}
            >
              <div>
                <span style={{ fontSize: '12px', color: '#9ca3af' }}>累计确证价格杀熟订单</span>
                <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#ff4d4d', fontFamily: 'var(--font-sans)', marginTop: '4px' }}>
                  5,856<span>个</span>
                </h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '11px', color: '#ff4d4d', background: 'rgba(255,77,77,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  被宰发生率 23.6%
                </span>
                <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '10px' }}>外卖与机票门类属于重灾区</p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '16px', background: 'rgba(79, 172, 254, 0.03)', border: '1px solid rgba(79, 172, 254, 0.15)' }}>
              <h5 style={{ fontSize: '13px', fontWeight: '600', color: '#00f2fe', marginBottom: '6px' }}>🛡️ PriceShield 比赛演示特别声明</h5>
              <p style={{ fontSize: '11px', color: '#9ca3af', lineHeight: '1.5' }}>
                本监控屏数据流基于典型大数据杀熟事件特征及差价频率由前端算法计算生成。在真实商用环境下，系统能自动调用用户防杀熟扩展浏览器插件，在云端动态进行大平台脱敏定价抓取并报警。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 6. RIGHTS PROTECTION VIEW (个人维权)
// -------------------------------------------------------------
function RightsProtectionView() {
  const [rightsTab, setRightsTab] = useState('cases'); // 'cases', 'guide', 'more'

  const casesData = [
    {
      title: "携程网“海景房虚假宣传”欺诈案（退一赔三）",
      time: "2023年民事诉讼经典判例",
      badge: "退一赔三 ⚖️",
      badgeClass: "success",
      intro: "消费者李先生通过携程APP预订某酒店“豪华海景房”，单价1650元。实际入住后发现房间为普通大床房，窗外完全看不到任何海景。原告与客服多次协商无果，遂提起诉讼。",
      steps: [
        { time: "步骤一 (取证)", title: "现场拍照与页面截图", desc: "李先生在入住当天，对没有海景的房间内部和窗外景观进行了全面拍照记录，同时在APP内对订单明细、房间详情介绍、海景房文字描述等宣传页面进行截屏保存。", type: "info" },
        { time: "步骤二 (协商)", title: "与携程官方客服交涉沟通", desc: "向携程提出“名不副实”的虚假加价指控。客服以“属于合作酒店失误，携程只做中介代理”为由拒绝给予差价赔偿，协商宣告失败。", type: "warning" },
        { time: "步骤三 (起诉)", title: "在线提交民事起诉状", desc: "李先生在微信小程序“人民法院在线服务”中，对携程运营主体“携程旅游网络技术（上海）有限公司”提起民事诉讼，案由为网络服务合同纠纷，主张虚假欺诈退一赔三。", type: "info" },
        { time: "步骤四 (判决)", title: "浦东新区人民法院公开审理并胜诉", desc: "法院审理认为被告的虚假海景房宣传严重误导消费者，构成欺诈。依照《消保法》第55条判决被告携程向李先生退还房费1650元，并支付3倍赔偿金4950元，合计退赔6600元！", type: "success" }
      ]
    },
    {
      title: "某打车平台老用户“刚需溢价”纠纷调解案（双账号比价）",
      time: "2025年消协介入行政调解案",
      badge: "调解成功 🟢",
      badgeClass: "active",
      intro: "消费者王女士与新激活用户在同一时间、同一地点叫车，发现老账户预估价高出24%。王女士进行双账号对比取证，并向12315发起行政投诉，消协介入组织双方调解。",
      steps: [
        { time: "步骤一 (比价)", title: "同设备双账号即时对比", desc: "王女士在同一地点叫车，发现其白金老账户显示预估价为23.6元，而旁边新访客账号仅为18.6元。两者差额高达5元（偏离度26.8%）。", type: "info" },
        { time: "步骤二 (录屏)", title: "录屏保留完整交易链条", desc: "王女士开启手机录屏，全程不中断地录制了“打开两个手机 -> 搜索目的地 -> 展示不同价格 -> 下单确认”的整个流程，并记录了网络环境和系统时间。", type: "info" },
        { time: "步骤三 (投诉)", title: "12315平台线上申诉举报", desc: "在全国12315官网上发起对打车平台的行政申诉，详细附上双手机比价截图和录制好的视频取证包，要求退还历史差价并限期纠正算法规则。", type: "warning" },
        { time: "步骤四 (调解)", title: "消费者协会介入调解并达成", desc: "消协依法介入。平台承认“出行急迫画像算法”存在定价偏差，同意向王女士道歉并达成书面调解：退还历次行程差价340元，并赠送非个性化降价补偿券。", type: "success" }
      ]
    },
    {
      title: "某外卖平台新老会员“配送费倒挂”侵权争议案",
      time: "2026年市监行政整改案",
      badge: "行政处罚 🔴",
      badgeClass: "danger",
      intro: "会员用户发现其配送费高达5元，而非会员仅为2元，会员权益反遭剥削。用户向属地市场监督管理局举报价差歧视，市监局下发限期整改通知，平台进行技术修正与批量退款。",
      steps: [
        { time: "步骤一 (取证)", title: "保留支付凭证与账户截图", desc: "用户对会员账户和非会员账户的同一配送目的地、相同商家进行截图，保存了开通会员费的扣款账单以及实际支付配送费的流水交易凭证。", type: "info" },
        { time: "步骤二 (举报)", title: "向市监局递交价格欺诈举报", desc: "向平台所在地市场监督管理局提交举报信，指出平台违反《电子商务法》及《个人信息保护法》，滥用市场支配地位实施算法合谋价格歧视。", type: "warning" },
        { time: "步骤三 (整改)", title: "监管约谈并下发行政整改令", desc: "市场监督管理局立案调查并约谈平台负责人，认定平台对会员与非会员进行无合理依据的价格歧视，且未事先明示，责令平台限期公开整改。", type: "warning" },
        { time: "步骤四 (整改)", title: "算法回溯整改与批量返还", desc: "平台发布公开整改声明，取消会员配送费差别溢价。同时，系统在后台对受影响的老会员进行差价批量原路退回，共涉及补偿上万元差价。", type: "success" }
      ]
    }
  ];

  return (
    <div style={{ animation: 'fade-in 0.4s ease' }}>
      {/* Top Direct Channels Cards */}
      <div className="rights-direct-channels">
        <div 
          className="channel-card cyan" 
          onClick={() => window.open('https://www.12315.cn', '_blank')}
        >
          <div className="channel-card-header">
            <div className="channel-icon-wrapper">
              <Gavel size={20} />
            </div>
            <span className="channel-title">国家 12315 平台直通车</span>
          </div>
          <p className="channel-desc">
            国家市场监督管理总局主办，是在线提交消费者申诉举报、快速维护个人交易公平最权威的全国直通平台。支持网页、小程序及APP接入。
          </p>
          <div className="channel-link-btn">
            <span>立即前往 12315 进行维权</span>
            <ExternalLink size={14} />
          </div>
        </div>

        <div 
          className="channel-card purple" 
          onClick={() => window.open('http://www.cca.org.cn', '_blank')}
        >
          <div className="channel-card-header">
            <div className="channel-icon-wrapper">
              <Scale size={20} />
            </div>
            <span className="channel-title">中国消费者协会 (CCA) 通道</span>
          </div>
          <p className="channel-desc">
            依法开展社会监督，受理消费者投诉并进行事实调解。对商品和服务质量进行社会监督，并提供专业法律援助与公益诉讼支持。
          </p>
          <div className="channel-link-btn">
            <span>立即前往 消费者协会 投诉调解</span>
            <ExternalLink size={14} />
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="analysis-subnav">
        {[
          { id: 'cases', label: '公开维权案例 (时间顺序排列)' },
          { id: 'guide', label: '四步维权流程介绍' },
          { id: 'more', label: '推荐更多维权方式与法律依据' }
        ].map(tab => (
          <button
            key={tab.id}
            className={`analysis-subnav-btn ${rightsTab === tab.id ? 'active' : ''}`}
            onClick={() => setRightsTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {rightsTab === 'cases' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', animation: 'fade-in 0.3s ease' }}>
          {casesData.map((cs, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#fff', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOpen size={18} style={{ color: '#00f2fe' }} /> {cs.title}
                </h3>
                <span className={`platform-risk-badge ${cs.badgeClass}`} style={{ fontSize: '11px', padding: '4px 10px' }}>
                  {cs.badge}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#9ca3af', lineHeight: '1.6', marginBottom: '20px', background: 'rgba(255,255,255,0.01)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #00f2fe' }}>
                <b>案情简述：</b>{cs.intro}
              </p>
              
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#fff', marginBottom: '12px' }}>
                📅 维权过程进展时间线 (从上至下)：
              </div>
              <div className="rights-timeline">
                {cs.steps.map((st, sidx) => (
                  <div key={sidx} className={`rights-timeline-item ${st.type === 'success' ? 'active' : st.type === 'warning' ? 'warning' : ''}`}>
                    <span className="rights-timeline-time">{st.time}</span>
                    <h4 className="rights-timeline-title">{st.title}</h4>
                    <p className="rights-timeline-desc">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {rightsTab === 'guide' && (
        <div className="glass-panel" style={{ padding: '24px', animation: 'fade-in 0.3s ease' }}>
          <h3 className="card-title" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '20px' }}>
            ⚖️ 科学维权四步法介绍
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '12px', color: '#00f2fe', fontWeight: 'bold', marginBottom: '8px' }}>STEP 01</div>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff', marginBottom: '8px' }}>📸 保留证据是关键</h4>
              <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.5', margin: 0 }}>
                截图保留交易凭证、宣传规则页面。极力推荐<b>进行无剪辑的同设备双账号/跨平台录屏</b>，以便铁证如山，防止平台算法策略下线后无迹可寻。
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '12px', color: '#ff9f43', fontWeight: 'bold', marginBottom: '8px' }}>STEP 02</div>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff', marginBottom: '8px' }}>💬 与商家/平台协商</h4>
              <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.5', margin: 0 }}>
                理智冷静地联系客服，出示录屏等证据，明确指出差别定价。主张消保法第55条“退一赔三”的赔偿诉求，拒绝接受没有书面凭证的小额补偿红包。
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '12px', color: '#a78bfa', fontWeight: 'bold', marginBottom: '8px' }}>STEP 03</div>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff', marginBottom: '8px' }}>🏛️ 申诉调解与行政投诉</h4>
              <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.5', margin: 0 }}>
                若平台推诿，立即向 12315 线上平台提起行政申诉。也可将 PriceShield 检测报告一并上传给监管机构，督促其对商家违法行为展开约谈并整改。
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '12px', color: '#2ecc71', fontWeight: 'bold', marginBottom: '8px' }}>STEP 04</div>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff', marginBottom: '8px' }}>🔨 法律民事诉讼底线</h4>
              <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.5', margin: 0 }}>
                若差价金额较大或影响范围广，可通过微信小程序“人民法院在线服务”进行在线民事起诉。依据民法典及消保法，坚决捍卫消费者的合法权益。
              </p>
            </div>
          </div>

          <div style={{ background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.15)', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#00f2fe', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              💡 维权时间线黄金建议:
            </h4>
            <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: '1.6', margin: 0 }}>
              <b>第 1 天 (发生当天) :</b> 收集证据并完成录屏，将数据归档。 <br />
              <b>第 1-3 天 :</b> 协商沟通，保留平台聊天截屏。 <br />
              <b>第 3-7 天 :</b> 如果平台协商未达成，向12315以及各地消协发起行政投诉。 <br />
              <b>第 7-15 天 :</b> 若有胜诉可能且调解失败，向被告所在地法院提起诉讼并准备开庭证据。
            </p>
          </div>
        </div>
      )}

      {rightsTab === 'more' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', animation: 'fade-in 0.3s ease' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="card-title" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '16px' }}>
              📞 推荐更多权威维权渠道
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff', marginBottom: '6px' }}>1. 拨打 12315 消费者服务热线</h4>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0, lineHeight: '1.5' }}>
                  全国统一的消费者申诉举报电话。您可以随时拨打平台所在地区的“区号+12315”进行人工咨询、登记并寻求当地消协的帮助。
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff', marginBottom: '6px' }}>2. 12377 网络不良信息举报中心</h4>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0, lineHeight: '1.5' }}>
                  如果您发现某些APP存在违法收集隐私数据（如读取通讯录、越权定位等）并借此实施杀熟的行为，可在 <b>www.12377.cn</b> 进行一键举报。
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff', marginBottom: '6px' }}>3. 人民法院在线服务平台</h4>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0, lineHeight: '1.5' }}>
                  微信搜索<b>“人民法院在线服务”</b>小程序。实名认证后，可在线上传民事起诉状、证据清单，足不出户进行网络起诉立案及出庭。
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 className="card-title" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '16px' }}>
              📚 维权核心法律依据指南
            </h3>
            <div className="legal-grid">
              <div className="legal-card">
                <div className="legal-card-title">
                  <Gavel size={14} /> 《消费者权益保护法》第五十五条
                </div>
                <p style={{ fontSize: '11px', color: '#9ca3af', lineHeight: '1.6', margin: 0 }}>
                  <b>欺诈三倍赔偿（退一赔三）：</b>经营者提供商品或者服务有欺诈行为的，应当增加赔偿其受到的损失，金额为消费者购买商品价款的三倍；增加赔偿金额不足五百元的为五百元。
                </p>
              </div>

              <div className="legal-card">
                <div className="legal-card-title">
                  <Gavel size={14} /> 《电子商务法》第十八条
                </div>
                <p style={{ fontSize: '11px', color: '#9ca3af', lineHeight: '1.6', margin: 0 }}>
                  <b>算法推荐告知权：</b>电子商务经营者根据消费者的兴趣爱好、消费习惯等特征向其提供商品或者服务的搜索结果的，应当同时向该消费者提供<b>不针对其个人特征的选项</b>，尊重其平等交易权。
                </p>
              </div>

              <div className="legal-card">
                <div className="legal-card-title">
                  <Gavel size={14} /> 《个人信息保护法》第二十四条
                </div>
                <p style={{ fontSize: '11px', color: '#9ca3af', lineHeight: '1.6', margin: 0 }}>
                  <b>拒绝算法差别定价：</b>个人信息处理者利用个人信息进行自动化决策，应当保证决策的公正、合理，<b>不得在交易价格等交易条件上实行不合理的差别待遇</b>（即禁止算法杀熟）。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 7. SETTINGS VIEW (设置中心)
// -------------------------------------------------------------
function SettingsView() {
  return (
    <div style={{ animation: 'fade-in 0.4s ease' }} className="settings-layout">
      <div className="glass-panel settings-card">
        <h3 className="simulator-controls-title" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '8px' }}>
          🛡️ 防的大数据杀熟与隐私安全防御设置
        </h3>

        <div className="settings-row">
          <div className="settings-info">
            <h4>开启实时价格歧视网页扫描</h4>
            <p>当您进入淘宝、携程、美团等支持平台时，自动静默比对不同终端价格。</p>
          </div>
          <label className="switch-control">
            <input type="checkbox" defaultChecked />
            <span className="switch-slider"></span>
          </label>
        </div>

        <div className="settings-row">
          <div className="settings-info">
            <h4>防大数据杀熟虚拟设备指纹 cloaking</h4>
            <p>向平台随机发送中低端安卓机设备头（User-Agent），规避高价值iOS高端溢价。</p>
          </div>
          <label className="switch-control">
            <input type="checkbox" defaultChecked />
            <span className="switch-slider"></span>
          </label>
        </div>

        <div className="settings-row">
          <div className="settings-info">
            <h4>开启新老注册用户定价虚拟混合</h4>
            <p>通过沙盒比价插件提取新用户折扣专区，自动注入老用户账号叠加领券。</p>
          </div>
          <label className="switch-control">
            <input type="checkbox" defaultChecked />
            <span className="switch-slider"></span>
          </label>
        </div>

        <div className="settings-row">
          <div className="settings-info">
            <h4>自动一键维权信件智能生成</h4>
            <p>当平台检测到交易溢价偏差超过 10% 时，实时弹窗提醒并自动生成投诉文书。</p>
          </div>
          <label className="switch-control">
            <input type="checkbox" defaultChecked />
            <span className="switch-slider"></span>
          </label>
        </div>
      </div>

      <div className="glass-panel settings-card">
        <h3 className="simulator-controls-title" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '8px' }}>
          🔒 本地沙盒数据与备份保护
        </h3>

        <div className="settings-row">
          <div className="settings-info">
            <h4>全本地化计算（捍卫您自身的隐私）</h4>
            <p>所有账单诊断计算、扫描文件识别均在本地前端完成，PriceShield 决不上传您的消费记录到云端。</p>
          </div>
          <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => alert('清除本地缓存完成！')}>
            清除本地账单缓存
          </button>
        </div>

        <div className="settings-row">
          <div className="settings-info">
            <h4>比赛测试模拟数据源一键还原</h4>
            <p>将测试大屏、价格变化折线图、及可疑订单重置为初始化默认评委演示状态。</p>
          </div>
          <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => alert('已成功重置比赛预设数据源！')}>
            重置演示数据
          </button>
        </div>
      </div>
    </div>
  );
}
