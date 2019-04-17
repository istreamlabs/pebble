
export const CHANNEL_DATA = [
  {
    id: 'turner.nba-lp-away-15',
    version: '21',
    blueprint: {
      id: 'nba_blueprint_test',
      version: '1'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'on',
      regions: {
        'aws-west-isp': {
          channel_state: 'on',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        },
        'aws-east-isp': {
          channel_state: 'on',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'jwong_fubo_test',
    version: '15',
    blueprint: {
      id: 'fubo_nba_2018',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'jwong_turner_test',
    version: '21',
    blueprint: {
      id: 'nba_blueprint',
      version: '10'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod',
        MasterClockSync: {
          MasterClockSyncSource: 'SeiPicTiming',
          MasterClockSyncTimeout: 5000,
          MasterClockSyncTimeZone: -4
        }
      }
    }
  },
  {
    id: 'mswartzendruber_version_six_test',
    version: '14',
    blueprint: {
      id: 'jw_mc_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'jwong_turner_inc_test_v8',
    version: '21',
    blueprint: {
      id: 'nba_blueprint',
      version: '8'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applying',
            channel_state: 'off'
          }
        }
      }
    }
  },
  {
    id: 'dcaiafa_test',
    version: '23',
    blueprint: {
      id: 'nba_blueprint',
      version: '13'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'jwong_isp_test',
    version: '21',
    blueprint: {
      id: 'nba_blueprint',
      version: '15'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'cnngo_slated_east',
    version: '14',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'cnngo_noslate_east',
    version: '14',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'cnni_slated_east',
    version: '12',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'hln_slated_east',
    version: '12',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: '60fps_vegas_test',
    version: '13',
    blueprint: {
      id: 'fubo_nba_vegas_2018',
      version: '4'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: '60fps_fubo_vegas_hou',
    version: '8',
    blueprint: {
      id: 'fubo_nba_vegas_2018',
      version: '4'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'matts_playback_test',
    version: '1',
    blueprint: {
      id: 'fubo_nba_2018',
      version: '8'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'media-tag-test',
    version: '4',
    blueprint: {
      id: 'nba_blueprint',
      version: '18'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'spark-test',
    version: '6',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba-60fps-test-ao',
    version: '2',
    blueprint: {
      id: 'nba_blueprint',
      version: '19'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba_60fps_test',
    version: '7',
    blueprint: {
      id: 'nba_blueprint',
      version: '21'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'mml-60fps-test-turner.DAL-PGM',
    version: '2',
    blueprint: {
      id: 'nba_blueprint',
      version: '21'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba_60fps_test_2',
    version: '2',
    blueprint: {
      id: 'nba_blueprint',
      version: '21'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'mml-60fps-test-turner.Spanish-1',
    version: '1',
    blueprint: {
      id: 'nba_blueprint',
      version: '21'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'westmmltest101',
    version: '8',
    blueprint: {
      id: 'mml',
      version: '11'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        },
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ou08',
        pub_cluster_id: 'aws-old-prod'
      },
      'aws-east-isp': {
        source: 'turner.ou08',
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'dualmmltestou08',
    version: '5',
    blueprint: {
      id: 'mml',
      version: '11'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        },
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ou08',
        pub_cluster_id: 'aws-old-prod'
      },
      'aws-east-isp': {
        source: 'turner.ou08',
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'ao_test',
    version: '5',
    blueprint: {
      id: 'ao_test',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'dtaylor_spark_testing',
    version: '2',
    blueprint: {
      id: 'spark_testing',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'smokeTest',
    version: '1',
    blueprint: {
      id: 'spark_testing',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'ao_test2',
    version: '5',
    blueprint: {
      id: 'mml',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.mml205_primary',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'ao-mml-60fps-test',
    version: '10',
    blueprint: {
      id: 'mml-60fps',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        },
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-old-prod'
      },
      'aws-east-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'ao-mml-60fps-test-west',
    version: '10',
    blueprint: {
      id: 'mml-60fps',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.mml805_primary',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'crossTest-primary',
    version: '3',
    blueprint: {
      id: 'mml-60fps',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.DET-PGM',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'crossTest-secondary',
    version: '4',
    blueprint: {
      id: 'mml-60fps',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        source: 'turner.DET-PGM',
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'ao-nba',
    version: '1',
    blueprint: {
      id: 'nba_60fps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        },
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      },
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'vegasOU05',
    version: '3',
    blueprint: {
      id: 'mml',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.ou05',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba60ptest',
    version: '1',
    blueprint: {
      id: 'nba_60fps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'reconciling',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'reconciling'
          },
          pub: {
            config_state: 'applying',
            channel_state: 'off'
          }
        },
        'aws-east-isp': {
          channel_state: 'reconciling',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'reconciling'
          },
          pub: {
            config_state: 'applying',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      },
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba60fpstest',
    version: '3',
    blueprint: {
      id: 'nba_60fps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        },
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      },
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'pe-test01',
    version: '3',
    blueprint: {
      id: 'spark_testing',
      version: '7'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'jw_test5689',
    version: '12',
    blueprint: {
      id: 'nba_blueprint',
      version: '30'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'pe-test04',
    version: '1',
    blueprint: {
      id: 'spark_testing',
      version: '7'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.BOS-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'jgodin-nba_blueprint-test',
    version: '4',
    blueprint: {
      id: 'nba_blueprint',
      version: '30'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'jgodin-nba_60fps-test',
    version: '5',
    blueprint: {
      id: 'nba_60fps',
      version: '5'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'pe-test06',
    version: '1',
    blueprint: {
      id: 'spark_testing',
      version: '7'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.BOS-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'spark-r8',
    version: '2',
    blueprint: {
      id: 'spark_testing',
      version: '7'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.ou08',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'jw_spark',
    version: '2',
    blueprint: {
      id: 'spark',
      version: '1'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'lgarrett_test',
    version: '1',
    blueprint: {
      id: 'nba_blueprint',
      version: '34'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'cha',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.CHA-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'bos',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.BOS-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'chi',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.CHI-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'cle',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.CLE-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'dal',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.DAL-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'den',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.DEN-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'det',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.DET-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'gsw',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.GSW-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'hou',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.HOU-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'ind',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.IND-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'lac',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.LAC-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'lal',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.LAL-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'mem',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.MEM-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'mia',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.MIA-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'mil',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.MIL-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'min',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.MIN-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'nop',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.NOP-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'nyk',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.NYK-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'okc',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.OKC-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'orl',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.ORL-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'phx',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.PHX-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'phi',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.PHI-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'por',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.POR-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'sac',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.SAC-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'sas',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.SAS-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'tor',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.TOR-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'uta',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.UTA-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'was',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.WAS-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'atl',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.ATL-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'bkn',
    version: '1',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.BKN-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'e01',
    version: '3',
    blueprint: {
      id: 'mml-60fps-nocaps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.encompass_01',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'e02',
    version: '3',
    blueprint: {
      id: 'mml-60fps-nocaps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.encompass_02',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'e03',
    version: '3',
    blueprint: {
      id: 'mml-60fps-nocaps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.encompass_03',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'e04',
    version: '3',
    blueprint: {
      id: 'mml-60fps-nocaps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.encompass_04',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: '101',
    version: '4',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.mml101_primary',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: '102',
    version: '4',
    blueprint: {
      id: 'mml-60fps',
      version: '15'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.mml102_primary',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: '103',
    version: '4',
    blueprint: {
      id: 'mml-60fps',
      version: '15'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.mml103_primary',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: '104',
    version: '4',
    blueprint: {
      id: 'mml-60fps',
      version: '15'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.mml104_primary',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: '201',
    version: '4',
    blueprint: {
      id: 'mml-60fps',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.mml101_primary',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'slate_test',
    version: '5',
    blueprint: {
      id: 'nba_blueprint',
      version: '34'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'on',
      regions: {
        'aws-west-isp': {
          channel_state: 'on',
          config_state: 'applied',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'dtaylor-test',
    version: '1',
    blueprint: {
      id: 'mml',
      version: '22'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  }
];
